
export const codeTemplate = (id) => {
    const codeSettings = {

    background: {
        color: "#112231",
        bgColorOne: "#FC354C",
        bgColorTwo: "#0ABFBC"
    },
    language:{
       name:"JavaScript",
    },      
    theme:{
        name:"Atom Dark",
    },  
    advanced:{
        borderRadius:6,
        opacity:1,
        rotate:0,   
        scale:0.9
    },
    header:{
        direction: "top-down",
        title: "The best editing tool for developers",
        subtitle: "Create engaging assets for your project"
    },

    style:{
        fontFamily: "Epilogue",
        bold: false,
        italic: false,
        color: "#fff",
        size: 14,
        spacing: 10
    },
    
};
  
    return codeSettings;
  };