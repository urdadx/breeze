
export const textTemplate = (id) => {
    const textSettings = {

    currentPhase:{
        type: "home"
    },

    visible:{
        status:false
    },

    direction: "top-down",

    text:{
        title: "The best editing tool for developers and designers",
        subtitle: "Create engaging assets for your project"
    },

    color:{ 
        color: "#ffffff",
        
    },      

    style:{
        fontFamily: '"Epilogue", sans-serif',
        bold: false,    
        italic: false,
        size: 15,
        spacing: 7
    },
    
};
  
    return textSettings;
  };