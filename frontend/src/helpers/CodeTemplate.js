
export const codeTemplate = (id) => {
    const codeSettings = {

    background: {
        color: "#112231",
        bgColorOne: "#FC354C",
        bgColorTwo: "#0ABFBC"
    },
    frame:{
       type:"MacOS",
    },
    position:{
        x:0,
        y:3,
        scale:0.85
    },
    size:{
        width:100,
        height:100
    },
    icon:{
        name:"emoji",
        color: "#4A90E2",
        fontSize: 125,
    },
    borderRadius:{
        curveness: 7
    }
    };
  
    return codeSettings;
  };