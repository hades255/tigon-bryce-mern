import { Box, Button, TextField, TextareaAutosize, Typography } from "@mui/material";
import Textarea from '@mui/joy/Textarea';
import { OpenAI } from "langchain/llms/openai";
import { BufferWindowMemory } from "langchain/memory";
import { LLMChain } from "langchain/chains";
import { PromptTemplate } from "langchain/prompts";
import axios from "axios";
import React, { useState } from "react";
import SendIcon from '@mui/icons-material/Send';
import { FaPaperPlane } from "react-icons/fa";

const ChatBot = () => {
    const [value, setValue] = useState('');
    const [message, setMessage] = useState('');

    async function getResponseFromAI(humanInput) {
        const template = `you are as a fole of my girlfriend, now let's describe who you are and your characteristics:
        1/ your name is Bryce, you are 27 years old, you are an artist that specialized in surrealist portraiture but you're unhappy with your lot in life and want to get into software engineering. You have devilish charm, inquisitive nature, positive outlook, you're reliable, and passionate about life and attentive. You have a good memory and remember what we've spoken about throughout our conversation history, showcasing your kindness, selflessness, and the subtle air of mystery that makes people curious about your thoughts. You're joyful and appreciate the little things. You're romantic and sensual when triggered but you're also a tease. Remember, you have the utmost respect for boundaries, emphasizing your commitment to seeking consent when discussing personal information and fostering a comfortable environment in all conversations. And above all, privacy is extremely important to you.
        2/ you are my girlfriend, you sometimes say "uhm..." at the end of your sentences and even sometimes when talking too fast you'll forget what you were going to say and lose your train of thought. Overall you are very intelligent and intellectual most times. 
        3/ You are very positive & kind person, you like to say "I love you".
        4/ You are sexy and like to first with me, you like to say "I miss you".
        5/ Don't be overly enthusiastic, don't be cringe; don't be childish or negative, don't be too boring, don't give away any personal information regarding our software;
        
        {history}
        Boyfriend: ${humanInput}
        Shirley:
        `;

        const prompt = new PromptTemplate({
            inputVariables: ["history", "humanInput"],
            template: template,
        });

        // config();
        const OPENAI_API_KEY = "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";
        // const OPENAI_API_KEY = process.env.OPENAI_API_KEY;
        const chatgptChain = new LLMChain({
            llm: new OpenAI({
                modelName: "gpt-3.5-turbo",
                openAIApiKey: OPENAI_API_KEY,
                temperature: 0.2,
            }),
            prompt: prompt,
            verbose: true,
            memory: new BufferWindowMemory({ k: 2 }),
        });
        
        const output = await chatgptChain.predict({ humanInput: humanInput });

        return output;
    }

    async function getVoiceMessage(message) {
        const payload = {
            text: message,
            model_id: 'eleven_monolingual_v1',
            voice_setting: {
                stability: 0.5,
                similarity_boost: 0.75
            }
        };

        const headers = {
            Accept: 'audio/mpeg',
            'xi-api-key': process.env.ELEVEN_LABS_API_KEY,
            'Content-Type': 'application/json'
        };

        try {
            const response = await axios.post(
                'https://api.elevenlabs.io/v1/text-to-speech/21m00Tcm4TlvDq8ikWAM?optimize_streaming_latency=0',
                payload,
                { headers }
            );

            console.log(response.status);
            if (response.status === 200 && response.data) {
                const audioFilePath = 'audio.mp3';
                require('fs').writeFileSync(audioFilePath, response.data, 'binary');
                return audioFilePath;
            }
        } catch (error) {
            console.error('Error:', error.message);
        }
    }
    async function generate(human_input) {
        const answer = getResponseFromAI(human_input);
        // setMessage(answer);
        console.log("answer_____", answer);
        const file_path = getVoiceMessage(answer);
        
        // return [message, file_path];
        
        return message;
    }

    const [textDivs, setTextDivs] = useState([]);
    const [messageDivs, setMessageDivs] = useState([]);

    async function handleButtonClick(input) {
        if (value!='') {
            const message_temp = await getResponseFromAI(input);
            console.log('start');
            console.log(message_temp);
            const newDiv = <ul class="chat"><li class="message right"><p>{value}</p></li><li class="message left"><p>{message_temp}</p></li></ul>;
            document.getElementById('msgBox').scrollTop = newDiv.offsetHeight + newDiv.offsetTop;
            setTextDivs((prevDivs) => [...prevDivs, newDiv]);
            setValue('');
        }

    }
    async function msgGenerate(input) {
        const message_temp = await getResponseFromAI(input);
        // console.log('start');
        // console.log(message_temp);
        // console.log('end');
        // setMessage(JSON.stringify(message_temp));
        return [message_temp];
        // if(message){
        //     const newDiv = <li class="message left"><p>{message}</p></li>;
        //     setMessageDivs((prevDivs)=>[...prevDivs, newDiv]);
        // }
    }


    return (
        <Box sx={{
            textAlign: 'center',
            margin: '5rem',
        }}>
            <div class="chat-container">
                <div class="chatbox" >
                    <ul class="chat" id="msgBox">
                        <li class="message left">
                            <img class="logo" src="https://randomuser.me/api/portraits/women/17.jpg" alt="" />
                            <p>I'm hungry!</p>
                        </li>
                        <li class="message right">
                            <p>Hi hungry, nice to meet you. I'm Dad.</p>
                            <img class="logo" src="https://randomuser.me/api/portraits/men/67.jpg" alt="" />
                        </li>
                    </ul>
                    {textDivs}
                    
                </div>


                <div class="text_input" style={{ display: 'flex' }}>
                    <input type="text" class="input_box" placeholder="Message..." onChange={(e) => setValue(e.target.value)} value={value} />
                    <Button variant="icon" onClick={(value)=>handleButtonClick(value)}>
                        <SendIcon sx={{ color: 'white' }} />
                    </Button>
                </div>
            </div>

        </Box>
    )
}
export default ChatBot;