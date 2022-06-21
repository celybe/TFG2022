import EditorJS from "@editorjs/editorjs";
import Header from "@editorjs/header";
import Table from "@editorjs/table";
import Marker from "@editorjs/marker";
import CodeTool from "@editorjs/code";
import { default as React, useState, useEffect, useRef } from "react";
import {
  Box,
  Button,
  useColorModeValue,
  GridItem,
  Grid,
} from "@chakra-ui/react";
import axios from "axios";

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
  const bg = useColorModeValue("#ffffff", "#00131C");
  const bg2 = useColorModeValue("#ffffff", "#001435");

  const ejInstance = useRef();
  const [editorData, setEditorData] = React.useState(
    localStorage.key("document")
      ? JSON.parse(localStorage.getItem("document"))
      : DEFAULT_INITIAL_DATA
  );

  useEffect(() => {
    if (!ejInstance.current) {
      initEditor();
    }
    return () => {
      ejInstance.current.destroy();
      ejInstance.current = null;
    };
  }, []);

  function saveAPI() {
    localStorage.setItem("document", JSON.stringify(editorData));
    try {
      axios.put(
        "http://localhost:5000/api/documents/62afeeb826c069c1ef1dd4f3",
        {
          data: editorData,
        }
      );
    } catch (error) {
      console.log(error);
    }
  }

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
            placeholder: "Enter a header",
            levels: [1, 2, 3, 4, 5, 6],
            defaultLevel: 3,
          },
        },
        table: {
          class: Table,
          config: {
            rows: 2,
            cols: 2,
          },
        },
        Marker: {
          class: Marker,
          shortcut: "CMD+SHIFT+M",
        },
        code: CodeTool,
      },
    });
  };

  return (
    <React.Fragment>
      <Grid
        w="100%"
        height="100vh"
        templateColumns="repeat(12, 1fr)"
        bg={bg}
        className="document-box"
      >
        <Button onClick={() => saveAPI()}>Save</Button>

        <GridItem
          colStart={2}
          colEnd={11}
          py={6}
          height="100vh"
          width="100%"
          id={EDITTOR_HOLDER_ID}
        >
          {" "}
        </GridItem>
      </Grid>
    </React.Fragment>
  );
};

export default Editor;
