import 'prismjs/components/prism-core';
import 'prismjs/components/prism-bash';
import 'prismjs/components/prism-clike';
import 'prismjs/components/prism-javascript';
import 'prismjs/components/prism-python';
import 'prismjs/components/prism-json';
import 'prismjs/components/prism-c';
import 'prismjs/components/prism-cpp';
import 'prismjs/components/prism-css';
import 'prismjs/components/prism-markup';
import 'prismjs/components/prism-csharp';
import 'prismjs/components/prism-typescript';
import 'prismjs/components/prism-markup-templating';


export const frames = [

    {
        name:"MacOS"
    },
    {
        name:"MacOS Dark"
    },
    {
        name:"None"
    }

]


export const backgrounds = [

    {
        name:"Gradient"
    },
    {
        name:"Solid"
    },
 
]

export const options = [
    {
        name:"Twitter Image"
    },
    {
        name:"LinkedIn Image"
    },
    {
        name:"Instagram Image"
    }
]


export const themes = [
    {
        name: "Atom Dark"
    },
    {
        name: 'VS Dark',
    },
    {
        name: "Monokai"
    },
    {
        name: "Duotone Sea"
    },
    {
        name: "Dracula"
    },
    {
        name: "Gruvbox Dark"
    },
    {
        name: "Solarized Dark Atom"
    }

]
  

export const languages = [
    {
        name:"Javascript"
    },
    {
        name:"Python"
    },
    {
        name:"Java"
    },
    {
        name: "C++"
    },
    {
        name: "CSS"
    },
    {
        name: "HTML"
    }
]


export const LANGUAGE = {
    'C++': 'cpp',
    'Java': 'java',
    'Python': 'python',
    'C#': 'csharp',
    'JSON': 'json',
    'HTML': 'html',
    'CSS': 'css',
    'JavaScript': 'javascript',
    'TypeScript': 'typescript',
    'Plain Text': 'plaintext',

};
  

export const codeSnippet = `for (let i = 1; i <= 20; i++){

    if (i % 15 == 0) console.log("FizzBuzz");

    else if (i % 3 == 0) console.log("Fizz");
    
    else if (i % 5 == 0) console.log("Buzz");
    
    else console.log(i);
}

// Write / paste your code here!🔥
// Use the trackers to adjust the editor's size ✨
`