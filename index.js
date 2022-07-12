{/* This code snippet will activate your blockli license and import the necessary files for blockli to work.
    If you have an existing index.js file, just copy the code snippet and paste it after your last import statement.
*/}

import React from "react";
import { NativeModules } from "react-native";
const { RNCustomCode } = NativeModules;
import {
  initialize,
  BlockliBlog,
  //BlockliFeatured,
  BlockliGraphics,
  BlockliPost,
  BlockliVideo,
} from "@blocklienterprise/blockli";
import config from "@src/build_config.json";

export const applyCustomCode = async (externalCodeSetup) => {
  const { blocksApi } = externalCodeSetup;

  await initialize("PLACE-LICENCE-HERE", config.app_id); // REPLACE "374SZPV2W7WL7BQ" WITH YOUR APP KIT LICENSE KEY

  blocksApi.addCustomBlockRender("blockli/blog-cards", (props) => (
    <BlockliBlog {...props} />
  ));

  //blocksApi.addCustomBlockRender("blockli/featured-cards", (props) => (
    //<BlockliFeatured {...props} />
  //));

  blocksApi.addCustomBlockRender("blockli/graphic-cards", (props) => (
    <BlockliGraphics {...props} />
  ));

  blocksApi.addCustomBlockRender("blockli/video-cards", (props) => (
    <BlockliVideo {...props} />
  ));

  blocksApi.addCustomBlockRender("blockli/post-cards", (props) => (
    <BlockliPost {...props} />
  ));
};
