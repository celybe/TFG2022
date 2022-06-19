import EditorJS from "@editorjs/editorjs";
import Header from "@editorjs/header";
import Table from "@editorjs/table";
import Marker from "@editorjs/marker";


import { default as React,useState,  useEffect, useRef } from "react";
import { Box, GridItem, Grid } from "@chakra-ui/react";


const DEFAULT_INITIAL_DATA = () => {
  return {
    time: new Date().getTime(),
    blocks: [
      {
        type: "header",
        data: {
          text: "Hello. Welcome to my new article!",
          level: 1,
        },
      },
    ],
  };
};

const EDITTOR_HOLDER_ID = "editorjs";

const Editor = (props) => {
  const ejInstance = useRef();
  const [editorData, setEditorData] = React.useState(DEFAULT_INITIAL_DATA);

  useEffect(() => {
    if (!ejInstance.current) {
      initEditor();
    }
    return () => {
      ejInstance.current.destroy();
      ejInstance.current = null;
    }
  }, []);
 
  const initEditor = () => {
    const editor = new EditorJS({
      holder: EDITTOR_HOLDER_ID,
      logLevel: "ERROR",
      data: editorData,
      onReady: () => {
        ejInstance.current = editor;
      },
      onChange: async () => {
        let content = await this.editorjs.saver.save();
        // Put your logic here to save this data to your DB
        setEditorData(content);
      },
      autofocus: true,
      tools: { 
        header: {
          class: Header, 
          config: {
            placeholder: 'Enter a header',
            levels: [1,2, 3, 4,5,6],
            defaultLevel: 3
          }
        },
        table:{
          class: Table,
          config: {
            rows: 2,
            cols: 2,
          },
        },
        Marker: {
          class: Marker,
          shortcut: 'CMD+SHIFT+M',
        }
      }, 
    });
  };
 
  return (
    <React.Fragment>
      <Grid w="100%" height="100vh" templateColumns='repeat(12, 1fr)' className="document-box">
      <GridItem colStart={2} colEnd={11} py={6}  height="100vh"  width="100%" id={EDITTOR_HOLDER_ID}> </GridItem>

      </Grid>
    </React.Fragment>
  );

};

export default Editor;
