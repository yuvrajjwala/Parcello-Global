import React, { useEffect } from "react";
import { useState } from "react";
// import { BiSolidDownload } from "react-icons/bi";
import { AiOutlineDownload } from "react-icons/ai";
export default function Table() {
  const [base64STR, setBase64STR] = useState(
    "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v8oAKKKKACv4A6/v8r+AOgD+/wAooooAK/gDr+/yv4A6AP7/ACv4A6/v8r+AOgAr+/yv4A6/v8oAKKKKAP4A6/v8r+AOv7/KAP4A6KKKACv7/K/gDr+/ygAooooA/gDooooA/v8AK/gDr+/yv4A6AP7/ACiiigD+AOiiigAr+/yv4A6/v8oA/gDooooA/v8AKKKKAP4A6/v8r+AOv7/KAP4A6KKKACv7/K/gDr+/ygD+AOiiigAooooA/v8AK/gDr+/yv4A6ACv7/K/gDr+/ygD+AOiiigD+/wAooooA/gDooooA/v8AKKKKAP4A6KKKAP7/ACv4A6/v8r+AOgAr+/yv4A6/v8oAK/gDr+/yv4A6ACv7/K/gDr+/ygAr+AOv7/K/gDoAK/v8r+AOv7/KAP4A6KKKAP7/ACiiigD+AOiiigD+/wAooooA/gDooooA/v8AK/gDr+/yv4A6ACv7/K/gDr+/ygAr+AOv7/K/gDoAK/v8r+AOv7/KACv4A6/v8r+AOgD+/wAooooA/gDooooA/v8AKKKKAP4A6KKKACv7/K/gDr+/ygD+AOv7/K/gDr+/ygAooooA/gDooooA/v8AKKKKACv4A6/v8r+AOgD+/wAr+AOv7/K/gDoAK/v8r+AOv7/KAP4A6KKKAP7/ACv4A6/v8r+AOgAr+/yv4A6/v8oAKKKKAP4A6/v8r+AOv7/KACiiigAr+AOv7/K/gDoA/v8AKKKKAP4A6KKKAP7/ACv4A6/v8r+AOgAr+/yv4A6/v8oAKKKKAP4A6KKKACv7/K/gDr+/ygD+AOv7/K/gDr+/ygD+AOiiigAooooA/v8AK/gDr+/yv4A6AP7/ACiiigD+AOv7/K/gDr+/ygAooooAK/gDr+/yv4A6AP7/ACiiigAr+AOv7/K/gDoA/v8AK/gDr+/yv4A6ACv7/K/gDr+/ygAooooA/gDr+/yv4A6/v8oA/gDooooAK/v8r+AOv7/KACiiigD+AOiiigD+/wAr+AOv7/K/gDoA/v8AKKKKAP4A6KKKACv7/K/gDr+/ygD+AOiiigD+/wAooooA/gDr+/yv4A6/v8oA/gDooooAK/v8r+AOv7/KAP4A6KKKACiiigD+/wAr+AOv7/K/gDoAK/v8r+AOv7/KAP4A6KKKAP7/ACiiigD+AOiiigD+/wAooooA/gDooooA/v8AK/gDr+/yv4A6ACv7/K/gDr+/ygAr+AOv7/K/gDoAK/v8r+AOv7/KACv4A6/v8r+AOgAr+/yv4A6/v8oA/gDooooA/v8AKKKKAP4A6KKKAP7/ACiiigD+AOiiigD+/wAr+AOv7/K/gDoAK/v8r+AOv7/KACv4A6/v8r+AOgAr+/yv4A6/v8oAK/gDr+/yv4A6AP7/ACiiigD+AOiiigD+/wAooooA/gDooooAK/v8r+AOv7/KAP4A6/v8r+AOv7/KACiiigD+AOiiigD+/wAooooAK/gDr+/yv4A6AP7/ACv4A6/v8r+AOgAr+/yv4A6/v8oA/gDooooA/v8AK/gDr+/yv4A6ACv7/K/gDr+/ygAooooA/gDr+/yv4A6/v8oAKKKKACv4A6/v8r+AOgD+/wAooooA/gDooooA/v8AK/gDr+/yv4A6ACv7/K/gDr+/ygAooooA/gDooooAK/v8r+AOv7/KAP4A6/v8r+AOv7/KAP4A6KKKACiiigD+/wAr+AOv7/K/gDoA/v8AKKKKAP4A6/v8r+AOv7/KACiiigAr+AOv7/K/gDoA/v8AKKKKACv4A6/v8r+AOgD+/wAr+AOv7/K/gDoAK/v8r+AOv7/KACiiigD+AOv7/K/gDr+/ygD+AOiiigAr+/yv4A6/v8oAKKKKAP4A6KKKAP7/ACv4A6/v8r+AOgD+/wAooooA/gDooooAK/v8r+AOv7/KAP4A6KKKAP7/ACiiigD+AOv7/K/gDr+/ygD+AOiiigAr+/yv4A6/v8oA/gDooooAKKKKAP7/ACv4A6/v8r+AOgAr+/yv4A6/v8oA/gDooooA/v8AKKKKAP4A6KKKAP7/ACiiigD+AOiiigD+/wAr+AOv7/K/gDoAK/v8r+AOv7/KACv4A6/v8r+AOgAr+/yv4A6/v8oAK/gDr+/yv4A6ACv7/K/gDr+/ygD+AOiiigD+/wAooooA/gDooooA/v8AKKKKAP4A6KKKAP7/ACv4A6/v8r+AOgAr+/yv4A6/v8oAK/gDr+/yv4A6ACv7/K/gDr+/ygAr+AOv7/K/gDoA/v8AKKKKAP4A6KKKAP7/ACiiigD+AOiiigAr+/yv4A6/v8oA/gDr+/yv4A6/v8oAKKKKAP4A6KKKAP7/ACiiigAr+AOv7/K/gDoA/v8AK/gDr+/yv4A6ACv7/K/gDr+/ygD+AOiiigD+/wAr+AOv7/K/gDoAK/v8r+AOv7/KACiiigD+AOv7/K/gDr+/ygAooooAK/gDr+/yv4A6AP7/ACiiigD+AOiiigD+/wAr+AOv7/K/gDoAK/v8r+AOv7/KACiiigD+AOiiigAr+/yv4A6/v8oA/gDr+/yv4A6/v8oA/gDooooAKKKKAP7/ACv4A6/v8r+AOgD+/wAooooA/gDr+/yv4A6/v8oAKKKKACv4A6/v8r+AOgD+/wAooooAK/gDr+/yv4A6AP7/ACv4A6/v8r+AOgAr+/yv4A6/v8oAKKKKAP4A6/v8r+AOv7/KAP4A6KKKACv7/K/gDr+/ygAooooA/gDooooA/v8AK/gDr+/yv4A6AP7/ACiiigD+AOiiigAr+/yv4A6/v8oA/gDooooA/v8AKKKKAP4A6/v8r+AOv7/KAP4A6KKKACv7/K/gDr+/ygD+AOiiigAooooA/v8AK/gDr+/yv4A6ACv7/K/gDr+/ygD+AOiiigD+/wAooooA/gDooooA/v8AKKKKAP4A6KKKAP7/ACv4A6/v8r+AOgAr+/yv4A6/v8oAK/gDr+/yv4A6ACv7/K/gDr+/ygAr+AOv7/K/gDoAK/v8r+AOv7/KAP4A6KKKAP7/ACiiigD+AOiiigD+/wAooooA/gDooooA/v8AK/gDr+/yv4A6ACv7/K/gDr+/ygAr+AOv7/K/gDoAK/v8r+AOv7/KACv4A6/v8r+AOgD+/wAooooA/gDooooA/v8AKKKKAP4A6KKKACv7/K/gDr+/ygD+AOv7/K/gDr+/ygAooooA/gDooooA/v8AKKKKACv4A6/v8r+AOgD+/wAr+AOv7/K/gDoAK/v8r+AOv7/KAP4A6KKKAP7/ACv4A6/v8r+AOgAr+/yv4A6/v8oAKKKKAP4A6/v8r+AOv7/KACiiigAr+AOv7/K/gDoA/v8AKKKKAP4A6KKKAP7/ACv4A6/v8r+AOgAr+/yv4A6/v8oAKKKKAP4A6KKKACv7/K/gDr+/ygD+AOv7/K/gDr+/ygD+AOiiigAooooA/v8AK/gDr+/yv4A6AP7/ACiiigD+AOv7/K/gDr+/ygAooooAK/gDr+/yv4A6AP7/ACiiigAr+AOv7/K/gDoA/v8AK/gDr+/yv4A6ACv7/K/gDr+/ygAooooA/gDr+/yv4A6/v8oA/gDooooAK/v8r+AOv7/KACiiigD+AOiiigD+/wAr+AOv7/K/gDoA/v8AKKKKAP4A6KKKACv7/K/gDr+/ygD+AOiiigD+/wAooooA/gDr+/yv4A6/v8oA/gDooooAK/v8r+AOv7/KAP4A6KKKACiiigD+/wAr+AOv7/K/gDoAK/v8r+AOv7/KAP4A6KKKAP7/ACiiigD+AOiiigD+/wAooooA/gDooooA/v8AK/gDr+/yv4A6ACv7/K/gDr+/ygAr+AOv7/K/gDoAK/v8r+AOv7/KACv4A6/v8r+AOgAr+/yv4A6/v8oA/gDooooA/v8AKKKKAP4A6KKKAP7/ACiiigD+AOiiigD+/wAr+AOv7/K/gDoAK/v8r+AOv7/KACv4A6/v8r+AOgAr+/yv4A6/v8oAK/gDr+/yv4A6AP7/ACiiigD+AOiiigD+/wAooooA/gDooooAK/v8r+AOv7/KAP4A6/v8r+AOv7/KACiiigD+AOiiigD+/wAooooAK/gDr+/yv4A6AP7/ACv4A6/v8r+AOgAr+/yv4A6/v8oA/gDooooA/v8AK/gDr+/yv4A6ACv7/K/gDr+/ygAooooA/gDr+/yv4A6/v8oAKKKKACv4A6/v8r+AOgD+/wAooooA/gDooooA/v8AK/gDr+/yv4A6ACv7/K/gDr+/ygAooooA/gDooooAK/v8r+AOv7/KAP4A6/v8r+AOv7/KAP4A6KKKACiiigD+/wAr+AOv7/K/gDoA/v8AKKKKAP4A6/v8r+AOv7/KACiiigAr+AOv7/K/gDoA/v8AKKKKACv4A6/v8r+AOgD+/wAr+AOv7/K/gDoAK/v8r+AOv7/KACiiigD+AOv7/K/gDr+/ygD+AOiiigAr+/yv4A6/v8oAKKKKAP4A6KKKAP7/ACv4A6/v8r+AOgD+/wAooooA/gDooooAK/v8r+AOv7/KAP4A6KKKAP7/ACiiigD+AOv7/K/gDr+/ygD+AOiiigAr+/yv4A6/v8oA/gDooooAKKKKAP7/ACv4A6/v8r+AOgAr+/yv4A6/v8oA/gDooooA/v8AKKKKAP4A6KKKAP7/ACiiigD+AOiiigD+/wAr+AOv7/K/gDoAK/v8r+AOv7/KACv4A6/v8r+AOgAr+/yv4A6/v8oAK/gDr+/yv4A6ACv7/K/gDr+/ygD+AOiiigD+/wAooooA/gDooooA/v8AKKKKAP4A6KKKAP7/ACv4A6/v8r+AOgAr+/yv4A6/v8oAK/gDr+/yv4A6ACv7/K/gDr+/ygAr+AOv7/K/gDoA/v8AKKKKAP4A6KKKAP7/ACiiigD+AOiiigAr+/yv4A6/v8oA/gDr+/yv4A6/v8oAKKKKAP4A6KKKAP7/ACiiigAr+AOv7/K/gDoA/v8AK/gDr+/yv4A6ACv7/K/gDr+/ygD+AOiiigD+/wAr+AOv7/K/gDoAK/v8r+AOv7/KACiiigD+AOv7/K/gDr+/ygAooooAK/gDr+/yv4A6AP7/ACiiigD+AOiiigD+/wAr+AOv7/K/gDoAK/v8r+AOv7/KACiiigD+AOiiigAr+/yv4A6/v8oA/gDr+/yv4A6/v8oA/gDooooAKKKKAP7/ACv4A6/v8r+AOgD+/wAooooA/gDr+/yv4A6/v8oAKKKKACv4A6/v8r+AOgD+/wAooooAK/gDr+/yv4A6AP7/ACv4A6/v8r+AOgAr+/yv4A6/v8oAKKKKAP4A6/v8r+AOv7/KAP4A6KKKACv7/K/gDr+/ygAooooA/gDooooA/v8AK/gDr+/yv4A6AP7/ACiiigD+AOiiigAr+/yv4A6/v8oA/gDooooA/v8AKKKKAP4A6/v8r+AOv7/KAP4A6KKKACv7/K/gDr+/ygD+AOiiigAooooA/v8AK/gDr+/yv4A6ACv7/K/gDr+/ygD+AOiiigD+/wAooooA/gDooooA/v8AKKKKAP4A6KKKAP7/ACv4A6/v8r+AOgAr+/yv4A6/v8oAK/gDr+/yv4A6ACv7/K/gDr+/ygAr+AOv7/K/gDoAK/v8r+AOv7/KAP4A6KKKAP7/ACiiigD+AOiiigD+/wAooooA/gDooooA/v8AK/gDr+/yv4A6ACv7/K/gDr+/ygAr+AOv7/K/gDoAK/v8r+AOv7/KACv4A6/v8r+AOgD+/wAooooA/gDooooA/v8AKKKKAP4A6KKKACv7/K/gDr+/ygD+AOv7/K/gDr+/ygAooooA/gDooooA/v8AKKKKACv4A6/v8r+AOgD+/wAr+AOv7/K/gDoAK/v8r+AOv7/KAP4A6KKKAP7/ACv4A6/v8r+AOgAr+/yv4A6/v8oAKKKKAP4A6/v8r+AOv7/KACiiigAr+AOv7/K/gDoA/v8AKKKKAP4A6KKKAP7/ACv4A6/v8r+AOgAr+/yv4A6/v8oAKKKKAP4A6KKKACv7/K/gDr+/ygD+AOv7/K/gDr+/ygD+AOiiigAooooA/v8AK/gDr+/yv4A6AP7/ACiiigD+AOv7/K/gDr+/ygAooooAK/gDr+/yv4A6AP7/ACiiigAr+AOv7/K/gDoA/v8AK/gDr+/yv4A6ACv7/K/gDr+/ygAooooA/gDr+/yv4A6/v8oA/gDooooAK/v8r+AOv7/KACiiigD+AOiiigD+/wAr+AOv7/K/gDoA/v8AKKKKAP4A6KKKACv7/K/gDr+/ygD+AOiiigD+/wAooooA/gDr+/yv4A6/v8oA/gDooooAK/v8r+AOv7/KAP4A6KKKACiiigD+/wAr+AOv7/K/gDoAK/v8r+AOv7/KAP4A6KKKAP7/ACiiigD+AOiiigD+/wAooooA/gDooooA/v8AK/gDr+/yv4A6ACv7/K/gDr+/ygAr+AOv7/K/gDoAK/v8r+AOv7/KACv4A6/v8r+AOgAr+/yv4A6/v8oA/gDooooA/v8AKKKKAP4A6KKKAP7/ACiiigD+AOiiigD+/wAr+AOv7/K/gDoAK/v8r+AOv7/KACv4A6/v8r+AOgAr+/yv4A6/v8oAK/gDr+/yv4A6AP7/ACiiigD+AOiiigD+/wAooooA/gDooooAK/v8r+AOv7/KAP4A6/v8r+AOv7/KACiiigD+AOiiigD+/wAooooAK/gDr+/yv4A6AP7/ACv4A6/v8r+AOgAr+/yv4A6/v8oA/gDooooA/v8AK/gDr+/yv4A6ACv7/K/gDr+/ygAooooA/gDr+/yv4A6/v8oAKKKKACv4A6/v8r+AOgD+/wAooooA/gDooooA/v8AK/gDr+/yv4A6ACv7/K/gDr+/ygAooooA/gDooooAK/v8r+AOv7/KAP4A6/v8r+AOv7/KAP4A6KKKACiiigD+/wAr+AOv7/K/gDoA/v8AKKKKAP4A6/v8r+AOv7/KACiiigAr+AOv7/K/gDoA/v8AKKKKACv4A6/v8r+AOgD+/wAr+AOv7/K/gDoAK/v8r+AOv7/KACiiigD+AOv7/K/gDr+/ygD+AOiiigAr+/yv4A6/v8oAKKKKAP4A6KKKAP7/ACv4A6/v8r+AOgD+/wAooooA/gDooooAK/v8r+AOv7/KAP4A6KKKAP7/ACiiigD+AOv7/K/gDr+/ygD+AOiiigAr+/yv4A6/v8oA/gDooooAKKKKAP7/ACv4A6/v8r+AOgAr+/yv4A6/v8oA/gDooooA/v8AKKKKAP4A6KKKAP7/ACiiigD+AOiiigD+/wAr+AOv7/K/gDoAK/v8r+AOv7/KACv4A6/v8r+AOgAr+/yv4A6/v8oAK/gDr+/yv4A6ACv7/K/gDr+/ygD+AOiiigD+/wAooooA/gDooooA/v8AKKKKAP4A6KKKAP7/ACv4A6/v8r+AOgAr+/yv4A6/v8oAK/gDr+/yv4A6ACv7/K/gDr+/ygAr+AOv7/K/gDoA/v8AKKKKAP4A6KKKAP7/ACiiigD+AOiiigAr+/yv4A6/v8oA/gDr+/yv4A6/v8oAKKKKAP4A6KKKAP7/ACiiigAr+AOv7/K/gDoA/v8AK/gDr+/yv4A6ACv7/K/gDr+/ygD+AOiiigD+/wAr+AOv7/K/gDoAK/v8r+AOv7/KACiiigD+AOv7/K/gDr+/ygAooooAK/gDr+/yv4A6AP7/ACiiigD+AOiiigD+/wAr+AOv7/K/gDoAK/v8r+AOv7/KACiiigD+AOiiigAr+/yv4A6/v8oA/gDr+/yv4A6/v8oA/gDooooAKKKKAP7/ACv4A6/v8r+AOgD+/wAooooA/gDr+/yv4A6/v8oAKKKKACv4A6/v8r+AOgD+/wAooooAK/gDr+/yv4A6AP7/ACv4A6/v8r+AOgAr+/yv4A6/v8oAKKKKAP4A6/v8r+AOv7/KAP4A6KKKACv7/K/gDr+/ygAooooA/gDooooA/v8AK/gDr+/yv4A6AP7/ACiiigD+AOiiigAr+/yv4A6/v8oA/gDooooA/v8AKKKKAP4A6/v8r+AOv7/KAP4A6KKKACv7/K/gDr+/ygD+AOiiigAooooA/v8AK/gDr+/yv4A6ACv7/K/gDr+/ygD+AOiiigD+/wAooooA/gDooooA/v8AKKKKAP4A6KKKAP7/ACv4A6/v8r+AOgAr+/yv4A6/v8oAK/gDr+/yv4A6ACv7/K/gDr+/ygAr+AOv7/K/gDoAK/v8r+AOv7/KAP4A6KKKAP7/ACiiigD+AOiiigD+/wAooooA/gDooooA/v8AK/gDr+/yv4A6ACv7/K/gDr+/ygAr+AOv7/K/gDoAK/v8r+AOv7/KACv4A6/v8r+AOgD+/wAooooA/gDooooA/v8AKKKKAP4A6KKKACv7/K/gDr+/ygD+AOv7/K/gDr+/ygAooooA/gDooooA/v8AKKKKACv4A6/v8r+AOgD+/wAr+AOv7/K/gDoAK/v8r+AOv7/KAP4A6KKKAP7/ACv4A6/v8r+AOgAr+/yv4A6/v8oAKKKKAP4A6/v8r+AOv7/KACiiigAr+AOv7/K/gDoA/v8AKKKKAP4A6KKKAP7/ACv4A6/v8r+AOgAr+/yv4A6/v8oAKKKKAP4A6KKKACv7/K/gDr+/ygD+AOv7/K/gDr+/ygD+AOiiigAooooA/v8AK/gDr+/yv4A6AP7/ACiiigD+AOv7/K/gDr+/ygAooooAK/gDr+/yv4A6AP7/ACiiigAr+AOv7/K/gDoA/v8AK/gDr+/yv4A6ACv7/K/gDr+/ygAooooA/gDr+/yv4A6/v8oA/gDooooAK/v8r+AOv7/KACiiigD+AOiiigD+/wAr+AOv7/K/gDoA/v8AKKKKAP4A6KKKACv7/K/gDr+/ygD+AOiiigD+/wAooooA/gDr+/yv4A6/v8oA/gDooooAK/v8r+AOv7/KAP4A6KKKACiiigD+/wAr+AOv7/K/gDoAK/v8r+AOv7/KAP4A6KKKAP7/ACiiigD+AOiiigD+/wAooooA/gDooooA/v8AK/gDr+/yv4A6ACv7/K/gDr+/ygAr+AOv7/K/gDoAK/v8r+AOv7/KACv4A6/v8r+AOgAr+/yv4A6/v8oA/gDooooA/v8AKKKKAP4A6KKKAP7/ACiiigD+AOiiigD+/wAr+AOv7/K/gDoAK/v8r+AOv7/KACv4A6/v8r+AOgAr+/yv4A6/v8oAK/gDr+/yv4A6AP7/ACiiigD+AOiiigD+/wAooooA/gDooooAK/v8r+AOv7/KAP4A6/v8r+AOv7/KACiiigD+AOiiigD+/wAooooAK/gDr+/yv4A6AP7/ACv4A6/v8r+AOgAr+/yv4A6/v8oA/gDooooA/v8AK/gDr+/yv4A6ACv7/K/gDr+/ygAooooA/gDr+/yv4A6/v8oAKKKKACv4A6/v8r+AOgD+/wAooooA/gDooooA/v8AK/gDr+/yv4A6ACv7/K/gDr+/ygAooooA/gDooooAK/v8r+AOv7/KAP4A6/v8r+AOv7/KAP4A6KKKACiiigD+/wAr+AOv7/K/gDoA/v8AKKKKAP4A6/v8r+AOv7/KACiiigAr+AOv7/K/gDoA/v8AKKKKACv4A6/v8r+AOgD+/wAr+AOv7/K/gDoAK/v8r+AOv7/KACiiigD+AOv7/K/gDr+/ygD+AOiiigAr+/yv4A6/v8oAKKKKAP4A6KKKAP7/ACv4A6/v8r+AOgD+/wAooooA/gDooooAK/v8r+AOv7/KAP4A6KKKAP7/ACiiigD+AOv7/K/gDr+/ygD+AOiiigAr+/yv4A6/v8oA/gDooooAKKKKAP7/ACv4A6/v8r+AOgAr+/yv4A6/v8oA/gDooooA/v8AKKKKAP4A6KKKAP7/ACiiigD+AOiiigD+/wAr+AOv7/K/gDoAK/v8r+AOv7/KACv4A6/v8r+AOgAr+/yv4A6/v8oAK/gDr+/yv4A6ACv7/K/gDr+/ygD+AOiiigD+/wAooooA/gDooooA/v8AKKKKAP4A6KKKAP7/ACv4A6/v8r+AOgAr+/yv4A6/v8oAK/gDr+/yv4A6ACv7/K/gDr+/ygAr+AOv7/K/gDoA/v8AKKKKAP4A6KKKAP7/ACiiigD+AOiiigAr+/yv4A6/v8oA/gDr+/yv4A6/v8oAKKKKAP4A6KKKAP7/ACiiigAr+AOv7/K/gDoA/v8AK/gDr+/yv4A6ACv7/K/gDr+/ygD+AOiiigD+/wAr+AOv7/K/gDoAK/v8r+AOv7/KACiiigD+AOv7/K/gDr+/ygAooooAK/gDr+/yv4A6AP7/ACiiigD+AOiiigD+/wAr+AOv7/K/gDoAK/v8r+AOv7/KACiiigD+AOiiigAr+/yv4A6/v8oA/gDr+/yv4A6/v8oA/gDooooAKKKKAP7/ACv4A6/v8r+AOgD+/wAooooA/gDr+/yv4A6/v8oAKKKKACv4A6/v8r+AOgD+/wAooooAK/gDr+/yv4A6AP7/ACv4A6/v8r+AOgAr+/yv4A6/v8oAKKKKAP4A6/v8r+AOv7/KAP4A6KKKACv7/K/gDr+/ygAooooA/gDooooA/v8AK/gDr+/yv4A6AP7/ACiiigD+AOiiigAr+/yv4A6/v8oA/gDooooA/v8AKKKKAP4A6/v8r+AOv7/KAP4A6KKKACv7/K/gDr+/ygD+AOiiigAooooA/v8AK/gDr+/yv4A6ACv7/K/gDr+/ygD+AOiiigD+/wAooooA/gDooooA/v8AKKKKAP4A6KKKAP7/ACv4A6/v8r+AOgAr+/yv4A6/v8oAK/gDr+/yv4A6ACv7/K/gDr+/ygAr+AOv7/K/gDoAK/v8r+AOv7/KAP4A6KKKAP7/ACiiigD+AOiiigD+/wAooooA/gDooooA/v8AK/gDr+/yv4A6ACv7/K/gDr+/ygAr+AOv7/K/gDoAK/v8r+AOv7/KACv4A6/v8r+AOgD+/wAooooA/gDooooA/v8AKKKKAP4A6KKKACv7/K/gDr+/ygD+AOv7/K/gDr+/ygAooooA/gDooooA/v8AKKKKACv4A6/v8r+AOgD+/wAr+AOv7/K/gDoAK/v8r+AOv7/KAP4A6KKKAP7/ACv4A6/v8r+AOgAr+/yv4A6/v8oAKKKKAP4A6/v8r+AOv7/KACiiigAr+AOv7/K/gDoA/v8AKKKKAP4A6KKKAP7/ACv4A6/v8r+AOgAr+/yv4A6/v8oAKKKKAP4A6KKKACv7/K/gDr+/ygD+AOv7/K/gDr+/ygD+AOiiigAooooA/v8AK/gDr+/yv4A6AP7/ACiiigD+AOv7/K/gDr+/ygAooooAK/gDr+/yv4A6AP7/ACiiigAr+AOv7/K/gDoA/v8AK/gDr+/yv4A6ACv7/K/gDr+/ygAooooA/gDr+/yv4A6/v8oA/gDooooAK/v8r+AOv7/KACiiigD+AOiiigD+/wAr+AOv7/K/gDoA/v8AKKKKAP4A6KKKACv7/K/gDr+/ygD+AOiiigD+/wAooooA/gDr+/yv4A6/v8oA/gDooooAK/v8r+AOv7/KAP4A6KKKACiiigD+/wAr+AOv7/K/gDoAK/v8r+AOv7/KAP4A6KKKAP7/ACiiigD+AOiiigD+/wAooooA/gDooooA/v8AK/gDr+/yv4A6ACv7/K/gDr+/ygAr+AOv7/K/gDoAK/v8r+AOv7/KACv4A6/v8r+AOgAr+/yv4A6/v8oA/gDooooA/v8AKKKKAP4A6KKKAP7/ACiiigD+AOiiigD+/wAr+AOv7/K/gDoAK/v8r+AOv7/KACv4A6/v8r+AOgAr+/yv4A6/v8oAK/gDr+/yv4A6AP7/ACiiigD+AOiiigD+/wAooooA/gDooooAK/v8r+AOv7/KAP4A6/v8r+AOv7/KACiiigD+AOiiigD+/wAooooAK/gDr+/yv4A6AP7/ACv4A6/v8r+AOgAr+/yv4A6/v8oA/gDooooA/v8AK/gDr+/yv4A6ACv7/K/gDr+/ygAooooA/gDr+/yv4A6/v8oAKKKKACv4A6/v8r+AOgD+/wAooooA/gDooooA/v8AK/gDr+/yv4A6ACv7/K/gDr+/ygAooooA/gDooooAK/v8r+AOv7/KAP4A6/v8r+AOv7/KAP4A6KKKACiiigD+/wAr+AOv7/K/gDoA/v8AKKKKAP4A6/v8r+AOv7/KACiiigAr+AOv7/K/gDoA/v8AKKKKACv4A6/v8r+AOgD+/wAr+AOv7/K/gDoAK/v8r+AOv7/KACiiigD+AOv7/K/gDr+/ygD+AOiiigAr+/yv4A6/v8oAKKKKAP4A6KKKAP7/ACv4A6/v8r+AOgD+/wAooooA/gDooooAK/v8r+AOv7/KAP4A6KKKAP7/ACiiigD+AOv7/K/gDr+/ygD+AOiiigAr+/yv4A6/v8oA/gDooooAKKKKAP7/ACv4A6/v8r+AOgAr+/yv4A6/v8oA/gDooooA/v8AKKKKAP4A6KKKAP7/ACiiigD+AOiiigD+/wAr+AOv7/K/gDoAK/v8r+AOv7/KACv4A6/v8r+AOgAr+/yv4A6/v8oAK/gDr+/yv4A6ACv7/K/gDr+/ygD+AOiiigD+/wAooooA/gDooooA/v8AKKKKAP4A6KKKAP7/ACv4A6/v8r+AOgAr+/yv4A6/v8oAK/gDr+/yv4A6ACv7/K/gDr+/ygAr+AOv7/K/gDoA/v8AKKKKAP4A6KKKAP7/ACiiigD+AOiiigAr+/yv4A6/v8oA/gDr+/yv4A6/v8oAKKKKAP4A6KKKAP7/ACiiigAr+AOv7/K/gDoA/v8AK/gDr+/yv4A6ACv7/K/gDr+/ygD+AOiiigD+/wAr+AOv7/K/gDoAK/v8r+AOv7/KACiiigD+AOv7/K/gDr+/ygAooooAK/gDr+/yv4A6AP7/ACiiigD+AOiiigD+/wAr+AOv7/K/gDoAK/v8r+AOv7/KACiiigD+AOiiigAr+/yv4A6/v8oA/gDr+/yv4A6/v8oA/gDooooAKKKKAP7/ACv4A6/v8r+AOgD+/wAooooA/gDr+/yv4A6/v8oAKKKKACv4A6/v8r+AOgD+/wAooooAK/gDr+/yv4A6AP7/ACv4A6/v8r+AOgAr+/yv4A6/v8oAKKKKAP4A6/v8r+AOv7/KAP4A6KKKACv7/K/gDr+/ygAooooA/gDooooA/v8AK/gDr+/yv4A6AP7/ACiiigD+AOiiigAr+/yv4A6/v8oA/gDooooA/v8AKKKKAP4A6/v8r+AOv7/KAP4A6KKKACv7/K/gDr+/ygD+AOiiigAooooA/v8AK/gDr+/yv4A6ACv7/K/gDr+/ygD+AOiiigD+/wAooooA/gDooooA/v8AKKKKAP4A6KKKAP7/ACv4A6/v8r+AOgAr+/yv4A6/v8oAK/gDr+/yv4A6ACv7/K/gDr+/ygAr+AOv7/K/gDoAK/v8r+AOv7/KAP4A6KKKAP7/ACiiigD+AOiiigD+/wAooooA/gDooooA/v8AK/gDr+/yv4A6ACv7/K/gDr+/ygAr+AOv7/K/gDoAK/v8r+AOv7/KACv4A6/v8r+AOgD+/wAooooA/gDooooA/v8AKKKKAP4A6KKKACv7/K/gDr+/ygD+AOv7/K/gDr+/ygAooooA/gDooooA/v8AKKKKACv4A6/v8r+AOgD+/wAr+AOv7/K/gDoAK/v8r+AOv7/KAP4A6KKKAP7/ACv4A6/v8r+AOgAr+/yv4A6/v8oAKKKKAP4A6/v8r+AOv7/KACiiigAr+AOv7/K/gDoA/v8AKKKKAP4A6KKKAP7/ACv4A6/v8r+AOgAr+/yv4A6/v8oAKKKKAP4A6KKKACv7/K/gDr+/ygD+AOv7/K/gDr+/ygD+AOiiigAooooA/v8AK/gDr+/yv4A6AP7/ACiiigD+AOv7/K/gDr+/ygAooooAK/gDr+/yv4A6AP7/ACiiigAr+AOv7/K/gDoA/v8AK/gDr+/yv4A6ACv7/K/gDr+/ygAooooA/gDr+/yv4A6/v8oA/gDooooAK/v8r+AOv7/KACiiigD+AOiiigD+/wAr+AOv7/K/gDoA/v8AKKKKAP4A6KKKACv7/K/gDr+/ygD+AOiiigD+/wAooooA/gDr+/yv4A6/v8oA/gDooooAK/v8r+AOv7/KAP4A6KKKACiiigD+/wAr+AOv7/K/gDoAK/v8r+AOv7/KAP4A6KKKAP7/ACiiigD+AOiiigD+/wAooooA/gDooooA/v8AK/gDr+/yv4A6ACv7/K/gDr+/ygAr+AOv7/K/gDoAK/v8r+AOv7/KACv4A6/v8r+AOgAr+/yv4A6/v8oA/gDooooA/v8AKKKKAP4A6KKKAP7/ACiiigD+AOiiigD+/wAr+AOv7/K/gDoAK/v8r+AOv7/KACv4A6/v8r+AOgAr+/yv4A6/v8oAK/gDr+/yv4A6AP7/ACiiigD+AOiiigD+/wAooooA/gDooooAK/v8r+AOv7/KAP4A6/v8r+AOv7/KACiiigD+AOiiigD+/wAooooAK/gDr+/yv4A6AP7/ACv4A6/v8r+AOgAr+/yv4A6/v8oA/gDooooA/v8AK/gDr+/yv4A6ACv7/K/gDr+/ygAooooA/gDr+/yv4A6/v8oAKKKKACv4A6/v8r+AOgD+/wAooooA/gDooooA/v8AK/gDr+/yv4A6ACv7/K/gDr+/ygAooooA/gDooooAK/v8r+AOv7/KAP4A6/v8r+AOv7/KAP4A6KKKACiiigD+/wAr+AOv7/K/gDoA/v8AKKKKAP4A6/v8r+AOv7/KACiiigAr+AOv7/K/gDoA/v8AKKKKACv4A6/v8r+AOgD+/wAr+AOv7/K/gDoAK/v8r+AOv7/KACiiigD+AOv7/K/gDr+/ygD+AOiiigAr+/yv4A6/v8oAKKKKAP4A6KKKAP7/ACv4A6/v8r+AOgD+/wAooooA/gDooooAK/v8r+AOv7/KAP4A6KKKAP7/ACiiigD+AOv7/K/gDr+/ygD+AOiiigAr+/yv4A6/v8oA/gDooooAKKKKAP7/ACv4A6/v8r+AOgAr+/yv4A6/v8oA/gDooooA/v8AKKKKAP4A6KKKAP7/ACiiigD+AOiiigD+/wAr+AOv7/K/gDoAK/v8r+AOv7/KACv4A6/v8r+AOgAr+/yv4A6/v8oAK/gDr+/yv4A6ACv7/K/gDr+/ygD+AOiiigD+/wAooooA/gDooooA/v8AKKKKAP4A6KKKAP7/ACv4A6/v8r+AOgAr+/yv4A6/v8oAK/gDr+/yv4A6ACv7/K/gDr+/ygAr+AOv7/K/gDoA/v8AKKKKAP4A6KKKAP7/ACiiigD+AOiiigAr+/yv4A6/v8oA/gDr+/yv4A6/v8oAKKKKAP4A6KKKAP7/ACiiigAr+AOv7/K/gDoA/v8AK/gDr+/yv4A6ACv7/K/gDr+/ygD+AOiiigD+/wAr+AOv7/K/gDoAK/v8r+AOv7/KACiiigD+AOv7/K/gDr+/ygAooooAK/gDr+/yv4A6AP7/ACiiigD+AOiiigD+/wAr+AOv7/K/gDoAK/v8r+AOv7/KACiiigD+AOiiigAr+/yv4A6/v8oA/gDr+/yv4A6/v8oA/gDooooAKKKKAP7/ACv4A6/v8r+AOgD+/wAooooA/gDr+/yv4A6/v8oAKKKKACv4A6/v8r+AOgD+/wAooooAK/gDr+/yv4A6AP7/ACv4A6/v8r+AOgAr+/yv4A6/v8oAKKKKAP4A6/v8r+AOv7/KAP4A6KKKACv7/K/gDr+/ygAooooA/gDooooA/v8AK/gDr+/yv4A6AP7/ACiiigD+AOiiigAr+/yv4A6/v8oA/gDooooA/v8AKKKKAP4A6/v8r+AOv7/KAP4A6KKKACv7/K/gDr+/ygD+AOiiigAooooA/v8AK/gDr+/yv4A6ACv7/K/gDr+/ygD+AOiiigD+/wAooooA/gDooooA/v8AKKKKAP4A6KKKAP7/ACv4A6/v8r+AOgAr+/yv4A6/v8oAK/gDr+/yv4A6ACv7/K/gDr+/ygAr+AOv7/K/gDoAK/v8r+AOv7/KAP4A6KKKAP7/ACiiigD+AOiiigD+/wAooooA/gDooooA/v8AK/gDr+/yv4A6ACv7/K/gDr+/ygAr+AOv7/K/gDoAK/v8r+AOv7/KACv4A6/v8r+AOgD+/wAooooA/gDooooA/v8AKKKKAP4A6KKKACv7/K/gDr+/ygD+AOv7/K/gDr+/ygAooooA/gDooooA/v8AKKKKACv4A6/v8r+AOgD+/wAr+AOv7/K/gDoAK/v8r+AOv7/KAP4A6KKKAP7/ACv4A6/v8r+AOgAr+/yv4A6/v8oAKKKKAP4A6/v8r+AOv7/KACiiigAr+AOv7/K/gDoA/v8AKKKKAP4A6KKKAP7/ACv4A6/v8r+AOgAr+/yv4A6/v8oAKKKKAP4A6KKKACv7/K/gDr+/ygD+AOv7/K/gDr+/ygD+AOiiigAooooA/v8AK/gDr+/yv4A6AP7/ACiiigD+AOv7/K/gDr+/ygAooooAK/gDr+/yv4A6AP7/ACiiigAr+AOv7/K/gDoA/v8AK/gDr+/yv4A6ACv7/K/gDr+/ygAooooA/gDr+/yv4A6/v8oA/gDooooAK/v8r+AOv7/KACiiigD+AOiiigD+/wAr+AOv7/K/gDoA/v8AKKKKAP4A6KKKACv7/K/gDr+/ygD+AOiiigD+/wAooooA/gDr+/yv4A6/v8oA/gDooooAK/v8r+AOv7/KAP4A6KKKACiiigD+/wAr+AOv7/K/gDoAK/v8r+AOv7/KAP4A6KKKAP7/ACiiigD+AOiiigD+/wAooooA/gDooooA/v8AK/gDr+/yv4A6ACv7/K/gDr+/ygAr+AOv7/K/gDoAK/v8r+AOv7/KACv4A6/v8r+AOgAr+/yv4A6/v8oA/gDooooA/v8AKKKKAP4A6KKKAP7/ACiiigD+AOiiigD+/wAr+AOv7/K/gDoAK/v8r+AOv7/KACv4A6/v8r+AOgAr+/yv4A6/v8oAK/gDr+/yv4A6AP7/ACiiigD+AOiiigD+/wAooooA/gDooooAK/v8r+AOv7/KAP4A6/v8r+AOv7/KACiiigD+AOiiigD+/wAooooAK/gDr+/yv4A6AP7/ACv4A6/v8r+AOgAr+/yv4A6/v8oA/gDooooA/v8AK/gDr+/yv4A6ACv7/K/gDr+/ygAooooA/gDr+/yv4A6/v8oAKKKKACv4A6/v8r+AOgD+/wAooooA/gDooooA/v8AK/gDr+/yv4A6ACv7/K/gDr+/ygAooooA/gDooooAK/v8r+AOv7/KAP4A6/v8r+AOv7/KAP4A6KKKACiiigD+/wAr+AOv7/K/gDoA/v8AKKKKAP4A6/v8r+AOv7/KACiiigAr+AOv7/K/gDoA/v8AKKKKACv4A6/v8r+AOgD+/wAr+AOv7/K/gDoAK/v8r+AOv7/KACiiigD+AOv7/K/gDr+/ygD+AOiiigAr+/yv4A6/v8oAKKKKAP4A6KKKAP7/ACv4A6/v8r+AOgD+/wAooooA/gDooooAK/v8r+AOv7/KAP4A6KKKAP7/ACiiigD+AOv7/K/gDr+/ygD+AOiiigAr+/yv4A6/v8oA/gDooooAKKKKAP7/ACv4A6/v8r+AOgAr+/yv4A6/v8oA/gDooooA/v8AKKKKAP4A6KKKAP7/ACiiigD+AOiiigD+/wAr+AOv7/K/gDoAK/v8r+AOv7/KACv4A6/v8r+AOgAr+/yv4A6/v8oAK/gDr+/yv4A6ACv7/K/gDr+/ygD+AOiiigD+/wAooooA/gDooooA/v8AKKKKAP4A6KKKAP7/ACv4A6/v8r+AOgAr+/yv4A6/v8oAK/gDr+/yv4A6ACv7/K/gDr+/ygAr+AOv7/K/gDoA/v8AKKKKAP4A6KKKAP7/ACiiigD+AOiiigAr+/yv4A6/v8oA/gDr+/yv4A6/v8oAKKKKAP4A6KKKAP7/ACiiigAr+AOv7/K/gDoA/v8AK/gDr+/yv4A6ACv7/K/gDr+/ygD+AOiiigD+/wAr+AOv7/K/gDoAK/v8r+AOv7/KACiiigD+AOv7/K/gDr+/ygAooooAK/gDr+/yv4A6AP7/ACiiigD+AOiiigD+/wAr+AOv7/K/gDoAK/v8r+AOv7/KACiiigD+AOiiigAr+/yv4A6/v8oA/gDr+/yv4A6/v8oA/gDooooAKKKKAP7/ACv4A6/v8r+AOgD+/wAooooA/gDr+/yv4A6/v8oAKKKKACv4A6/v8r+AOgD+/wAooooAK/gDr+/yv4A6AP7/ACv4A6/v8r+AOgAr+/yv4A6/v8oAKKKKAP4A6/v8r+AOv7/KAP4A6KKKACv7/K/gDr+/ygAooooA/gDooooA/v8AK/gDr+/yv4A6AP7/ACiiigD+AOiiigAr+/yv4A6/v8oA/gDooooA/v8AKKKKAP4A6/v8r+AOv7/KAP4A6KKKACv7/K/gDr+/ygD+AOiiigAooooA/v8AK/gDr+/yv4A6ACv7/K/gDr+/ygD+AOiiigD+/wAooooA/gDooooA/v8AKKKKAP4A6KKKAP7/ACv4A6/v8r+AOgAr+/yv4A6/v8oAK/gDr+/yv4A6ACv7/K/gDr+/ygAr+AOv7/K/gDoAK/v8r+AOv7/KAP4A6KKKAP7/ACiiigD+AOiiigD+/wAooooA/gDooooA/v8AK/gDr+/yv4A6ACv7/K/gDr+/ygAr+AOv7/K/gDoAK/v8r+AOv7/KACv4A6/v8r+AOgD+/wAooooA/gDooooA/v8AKKKKAP4A6KKKACv7/K/gDr+/ygD+AOv7/K/gDr+/ygAooooA/gDooooA/v8AKKKKACv4A6/v8r+AOgD+/wAr+AOv7/K/gDoAK/v8r+AOv7/KAP4A6KKKAP7/ACv4A6/v8r+AOgAr+/yv4A6/v8oAKKKKAP4A6/v8r+AOv7/KACiiigAr+AOv7/K/gDoA/v8AKKKKAP4A6KKKAP7/ACv4A6/v8r+AOgAr+/yv4A6/v8oAKKKKAP4A6KKKACv7/K/gDr+/ygD+AOv7/K/gDr+/ygD+AOiiigAooooA/v8AK/gDr+/yv4A6AP7/ACiiigD+AOv7/K/gDr+/ygAooooAK/gDr+/yv4A6AP7/ACiiigAr+AOv7/K/gDoA/v8AK/gDr+/yv4A6ACv7/K/gDr+/ygAooooA/gDr+/yv4A6/v8oA/gDooooAK/v8r+AOv7/KACiiigD+AOiiigD+/wAr+AOv7/K/gDoA/v8AKKKKAP4A6KKKACv7/K/gDr+/ygD+AOiiigD+/wAooooA/gDr+/yv4A6/v8oA/gDooooAK/v8r+AOv7/KAP4A6KKKACiiigD+/wAr+AOv7/K/gDoAK/v8r+AOv7/KAP4A6KKKAP7/ACiiigD+AOiiigD+/wAooooA/gDooooA/v8AK/gDr+/yv4A6ACv7/K/gDr+/ygAr+AOv7/K/gDoAK/v8r+AOv7/KACv4A6/v8r+AOgAr+/yv4A6/v8oA/gDooooA/v8AKKKKAP4A6KKKAP7/ACiiigD+AOiiigD+/wAr+AOv7/K/gDoAK/v8r+AOv7/KACv4A6/v8r+AOgAr+/yv4A6/v8oAK/gDr+/yv4A6AP7/ACiiigD+AOiiigD+/wAooooA/gDooooAK/v8r+AOv7/KAP4A6/v8r+AOv7/KACiiigD+AOiiigD+/wAooooAK/gDr+/yv4A6AP7/ACv4A6/v8r+AOgAr+/yv4A6/v8oA/gDooooA/v8AK/gDr+/yv4A6ACv7/K/gDr+/ygAooooA/gDr+/yv4A6/v8oAKKKKACv4A6/v8r+AOgD+/wAooooA/gDooooA/v8AK/gDr+/yv4A6ACv7/K/gDr+/ygAooooA/gDooooAK/v8r+AOv7/KAP4A6/v8r+AOv7/KAP4A6KKKACiiigD+/wAr+AOv7/K/gDoA/v8AKKKKAP4A6/v8r+AOv7/KACiiigAr+AOv7/K/gDoA/v8AKKKKACv4A6/v8r+AOgD+/wAr+AOv7/K/gDoAK/v8r+AOv7/KACiiigD+AOv7/K/gDr+/ygD+AOiiigAr+/yv4A6/v8oAKKKKAP4A6KKKAP7/ACv4A6/v8r+AOgD+/wAooooA/gDooooAK/v8r+AOv7/KAP4A6KKKAP7/ACiiigD+AOv7/K/gDr+/ygD+AOiiigAr+/yv4A6/v8oA/gDooooAKKKKAP7/ACv4A6/v8r+AOgAr+/yv4A6/v8oA/gDooooA/v8AKKKKAP4A6KKKAP7/ACiiigD+AOiiigD+/wAr+AOv7/K/gDoAK/v8r+AOv7/KACv4A6/v8r+AOgAr+/yv4A6/v8oAK/gDr+/yv4A6ACv7/K/gDr+/ygD+AOiiigD+/wAooooA/gDooooA/v8AKKKKAP4A6KKKAP7/ACv4A6/v8r+AOgAr+/yv4A6/v8oAK/gDr+/yv4A6ACv7/K/gDr+/ygAr+AOv7/K/gDoA/v8AKKKKAP4A6KKKAP7/ACiiigD+AOiiigAr+/yv4A6/v8oA/gDr+/yv4A6/v8oAKKKKAP4A6KKKAP7/ACiiigAr+AOv7/K/gDoA/v8AK/gDr+/yv4A6ACv7/K/gDr+/ygD+AOiiigD+/wAr+AOv7/K/gDoAK/v8r+AOv7/KACiiigD+AOv7/K/gDr+/ygAooooAK/gDr+/yv4A6AP7/ACiiigD+AOiiigD+/wAr+AOv7/K/gDoAK/v8r+AOv7/KACiiigD+AOiiigAr+/yv4A6/v8oA/gDr+/yv4A6/v8oA/gDooooAKKKKAP7/ACv4A6/v8r+AOgD+/wAooooA/gDr+/yv4A6/v8oAKKKKACv4A6/v8r+AOgD+/wAooooAK/gDr+/yv4A6AP7/ACv4A6/v8r+AOgAr+/yv4A6/v8oAKKKKAP4A6/v8r+AOv7/KAP4A6KKKACv7/K/gDr+/ygAooooA/gDooooA/v8AK/gDr+/yv4A6AP7/ACiiigD+AOiiigAr+/yv4A6/v8oA/gDooooA/v8AKKKKAP4A6/v8r+AOv7/KAP4A6KKKACv7/K/gDr+/ygD+AOiiigAooooA/v8AK/gDr+/yv4A6ACv7/K/gDr+/ygD+AOiiigD+/wAooooA/gDooooA/v8AKKKKAP4A6KKKAP7/ACv4A6/v8r+AOgAr+/yv4A6/v8oAK/gDr+/yv4A6ACv7/K/gDr+/ygAr+AOv7/K/gDoAK/v8r+AOv7/KAP4A6KKKAP7/ACiiigD+AOiiigD+/wAooooA/gDooooA/v8AK/gDr+/yv4A6ACv7/K/gDr+/ygAr+AOv7/K/gDoAK/v8r+AOv7/KACv4A6/v8r+AOgD+/wAooooA/gDooooA/v8AKKKKAP4A6KKKACv7/K/gDr+/ygD+AOv7/K/gDr+/ygAooooA/gDooooA/v8AKKKKACv4A6/v8r+AOgD+/wAr+AOv7/K/gDoAK/v8r+AOv7/KAP4A6KKKAP7/ACv4A6/v8r+AOgAr+/yv4A6/v8oAKKKKAP4A6/v8r+AOv7/KACiiigAr+AOv7/K/gDoA/v8AKKKKAP4A6KKKAP7/ACv4A6/v8r+AOgAr+/yv4A6/v8oAKKKKAP4A6KKKACv7/K/gDr+/ygD+AOv7/K/gDr+/ygD+AOiiigAooooA/v8AK/gDr+/yv4A6AP7/ACiiigD+AOv7/K/gDr+/ygAooooAK/gDr+/yv4A6AP7/ACiiigAr+AOv7/K/gDoA/v8AK/gDr+/yv4A6ACv7/K/gDr+/ygAooooA/gDr+/yv4A6/v8oA/gDooooAK/v8r+AOv7/KACiiigD+AOiiigD+/wAr+AOv7/K/gDoA/v8AKKKKAP4A6KKKACv7/K/gDr+/ygD+AOiiigD+/wAooooA/gDr+/yv4A6/v8oA/gDooooAK/v8r+AOv7/KAP4A6KKKACiiigD+/wAr+AOv7/K/gDoAK/v8r+AOv7/KAP4A6KKKAP7/ACiiigD+AOiiigD+/wAooooA/gDooooA/v8AK/gDr+/yv4A6ACv7/K/gDr+/ygAr+AOv7/K/gDoAK/v8r+AOv7/KACv4A6/v8r+AOgAr+/yv4A6/v8oA/gDooooA/v8AKKKKAP4A6KKKAP7/ACiiigD+AOiiigD+/wAr+AOv7/K/gDoAK/v8r+AOv7/KACv4A6/v8r+AOgAr+/yv4A6/v8oAK/gDr+/yv4A6AP7/ACiiigD+AOiiigD+/wAooooA/gDooooAK/v8r+AOv7/KAP4A6/v8r+AOv7/KACiiigD+AOiiigD+/wAooooAK/gDr+/yv4A6AP7/ACv4A6/v8r+AOgAr+/yv4A6/v8oA/gDooooA/v8AK/gDr+/yv4A6ACv7/K/gDr+/ygAooooA/gDr+/yv4A6/v8oAKKKKACv4A6/v8r+AOgD+/wAooooA/gDooooA/v8AK/gDr+/yv4A6ACv7/K/gDr+/ygAooooA/gDooooAK/v8r+AOv7/KAP4A6/v8r+AOv7/KAP4A6KKKACiiigD+/wAr+AOv7/K/gDoA/v8AKKKKAP4A6/v8r+AOv7/KACiiigAr+AOv7/K/gDoA/v8AKKKKACv4A6/v8r+AOgD+/wAr+AOv7/K/gDoAK/v8r+AOv7/KACiiigD+AOv7/K/gDr+/ygD+AOiiigAr+/yv4A6/v8oAKKKKAP4A6KKKAP7/ACv4A6/v8r+AOgD+/wAooooA/gDooooAK/v8r+AOv7/KAP4A6KKKAP7/ACiiigD+AOv7/K/gDr+/ygD+AOiiigAr+/yv4A6/v8oA/gDooooAKKKKAP7/ACv4A6/v8r+AOgAr+/yv4A6/v8oA/gDooooA/v8AKKKKAP4A6KKKAP7/ACiiigD+AOiiigD+/wAr+AOv7/K/gDoAK/v8r+AOv7/KACv4A6/v8r+AOgAr+/yv4A6/v8oAK/gDr+/yv4A6ACv7/K/gDr+/ygD+AOiiigD+/wAooooA/gDooooA/v8AKKKKAP4A6KKKAP7/ACv4A6/v8r+AOgAr+/yv4A6/v8oAK/gDr+/yv4A6ACv7/K/gDr+/ygAr+AOv7/K/gDoA/v8AKKKKAP4A6KKKAP7/ACiiigD+AOiiigAr+/yv4A6/v8oA/gDr+/yv4A6/v8oAKKKKAP4A6KKKAP7/ACiiigAr+AOv7/K/gDoA/v8AK/gDr+/yv4A6ACv7/K/gDr+/ygD+AOiiigD+/wAr+AOv7/K/gDoAK/v8r+AOv7/KACiiigD+AOv7/K/gDr+/ygAooooAK/gDr+/yv4A6AP7/ACiiigD+AOiiigD+/wAr+AOv7/K/gDoAK/v8r+AOv7/KACiiigD+AOiiigAr+/yv4A6/v8oA/gDr+/yv4A6/v8oA/gDooooAKKKKAP7/ACv4A6/v8r+AOgD+/wAooooA/gDr+/yv4A6/v8oAKKKKACv4A6/v8r+AOgD+/wAooooAK/gDr+/yv4A6AP7/ACv4A6/v8r+AOgAr+/yv4A6/v8oAKKKKAP4A6/v8r+AOv7/KAP4A6KKKACv7/K/gDr+/ygAooooA/gDooooA/v8AK/gDr+/yv4A6AP7/ACiiigD+AOiiigAr+/yv4A6/v8oA/gDooooA/v8AKKKKAP4A6/v8r+AOv7/KAP4A6KKKACv7/K/gDr+/ygD+AOiiigAooooA/v8AK/gDr+/yv4A6ACv7/K/gDr+/ygD+AOiiigD+/wAooooA/gDooooA/v8AKKKKAP4A6KKKAP7/ACv4A6/v8r+AOgAr+/yv4A6/v8oAK/gDr+/yv4A6ACv7/K/gDr+/ygAr+AOv7/K/gDoAK/v8r+AOv7/KAP4A6KKKAP7/ACiiigD+AOiiigD+/wAooooA/gDooooA/v8AK/gDr+/yv4A6ACv7/K/gDr+/ygAr+AOv7/K/gDoAK/v8r+AOv7/KACv4A6/v8r+AOgD+/wAooooA/gDooooA/v8AKKKKAP4A6KKKACv7/K/gDr+/ygD+AOv7/K/gDr+/ygAooooA/gDooooA/v8AKKKKACv4A6/v8r+AOgD+/wAr+AOv7/K/gDoAK/v8r+AOv7/KAP4A6KKKAP7/ACv4A6/v8r+AOgAr+/yv4A6/v8oAKKKKAP4A6/v8r+AOv7/KACiiigAr+AOv7/K/gDoA/v8AKKKKAP4A6KKKAP7/ACv4A6/v8r+AOgAr+/yv4A6/v8oAKKKKAP4A6KKKACv7/K/gDr+/ygD+AOv7/K/gDr+/ygD+AOiiigAooooA/v8AK/gDr+/yv4A6AP7/ACiiigD+AOv7/K/gDr+/ygAooooAK/gDr+/yv4A6AP7/ACiiigAr+AOv7/K/gDoA/v8AK/gDr+/yv4A6ACv7/K/gDr+/ygAooooA/gDr+/yv4A6/v8oA/gDooooAK/v8r+AOv7/KACiiigD+AOiiigD+/wAr+AOv7/K/gDoA/v8AKKKKAP4A6KKKACv7/K/gDr+/ygD+AOiiigD+/wAooooA/gDr+/yv4A6/v8oA/gDooooAK/v8r+AOv7/KAP4A6KKKACiiigD+/wAr+AOv7/K/gDoAK/v8r+AOv7/KAP4A6KKKAP7/ACiiigD+AOiiigD+/wAooooA/gDooooA/v8AK/gDr+/yv4A6ACv7/K/gDr+/ygAr+AOv7/K/gDoAK/v8r+AOv7/KACv4A6/v8r+AOgAr+/yv4A6/v8oA/gDooooA/v8AKKKKAP4A6KKKAP7/ACiiigD+AOiiigD+/wAr+AOv7/K/gDoAK/v8r+AOv7/KACv4A6/v8r+AOgAr+/yv4A6/v8oAK/gDr+/yv4A6AP7/ACiiigD+AOiiigD+/wAooooA/gDooooAK/v8r+AOv7/KAP4A6/v8r+AOv7/KACiiigD+AOiiigD+/wAooooAK/gDr+/yv4A6AP7/ACv4A6/v8r+AOgAr+/yv4A6/v8oA/gDooooA/v8AK/gDr+/yv4A6ACv7/K/gDr+/ygAooooA/gDr+/yv4A6/v8oAKKKKACv4A6/v8r+AOgD+/wAooooA/gDooooA/v8AK/gDr+/yv4A6ACv7/K/gDr+/ygAooooA/gDooooAK/v8r+AOv7/KAP4A6/v8r+AOv7/KAP4A6KKKACiiigD+/wAr+AOv7/K/gDoA/v8AKKKKAP4A6/v8r+AOv7/KACiiigAr+AOv7/K/gDoA/v8AKKKKACv4A6/v8r+AOgD+/wAr+AOv7/K/gDoAK/v8r+AOv7/KACiiigD+AOv7/K/gDr+/ygD+AOiiigAr+/yv4A6/v8oAKKKKAP4A6KKKAP7/ACv4A6/v8r+AOgD+/wAooooA/gDooooAK/v8r+AOv7/KAP4A6KKKAP7/ACiiigD+AOv7/K/gDr+/ygD+AOiiigAr+/yv4A6/v8oA/gDooooAKKKKAP7/ACv4A6/v8r+AOgAr+/yv4A6/v8oA/gDooooA/v8AKKKKAP4A6KKKAP7/ACiiigD+AOiiigD+/wAr+AOv7/K/gDoAK/v8r+AOv7/KACv4A6/v8r+AOgAr+/yv4A6/v8oAK/gDr+/yv4A6ACv7/K/gDr+/ygD+AOiiigD+/wAooooA/gDooooA/v8AKKKKAP4A6KKKAP7/ACv4A6/v8r+AOgAr+/yv4A6/v8oAK/gDr+/yv4A6ACv7/K/gDr+/ygAr+AOv7/K/gDoA/v8AKKKKAP4A6KKKAP7/ACiiigD+AOiiigAr+/yv4A6/v8oA/gDr+/yv4A6/v8oAKKKKAP4A6KKKAP7/ACiiigAr+AOv7/K/gDoA/v8AK/gDr+/yv4A6ACv7/K/gDr+/ygD+AOiiigD+/wAr+AOv7/K/gDoAK/v8r+AOv7/KACiiigD+AOv7/K/gDr+/ygAooooAK/gDr+/yv4A6AP7/ACiiigD+AOiiigD+/wAr+AOv7/K/gDoAK/v8r+AOv7/KACiiigD+AOiiigAr+/yv4A6/v8oA/gDr+/yv4A6/v8oA/gDooooAKKKKAP7/ACv4A6/v8r+AOgD+/wAooooA/gDr+/yv4A6/v8oAKKKKACv4A6/v8r+AOgD+/wAooooAK/gDr+/yv4A6AP7/ACv4A6/v8r+AOgAr+/yv4A6/v8oAKKKKAP4A6/v8r+AOv7/KAP4A6KKKACv7/K/gDr+/ygAooooA/gDooooA/v8AK/gDr+/yv4A6AP7/ACiiigD+AOiiigAr+/yv4A6/v8oA/gDooooA/v8AKKKKAP4A6/v8r+AOv7/KAP4A6KKKACv7/K/gDr+/ygD+AOiiigAooooA/v8AK/gDr+/yv4A6ACv7/K/gDr+/ygD+AOiiigD+/wAooooA/gDooooA/v8AKKKKAP4A6KKKAP7/ACv4A6/v8r+AOgAr+/yv4A6/v8oAK/gDr+/yv4A6ACv7/K/gDr+/ygAr+AOv7/K/gDoAK/v8r+AOv7/KAP4A6KKKAP7/ACiiigD+AOiiigD+/wAooooA/gDooooA/v8AK/gDr+/yv4A6ACv7/K/gDr+/ygAr+AOv7/K/gDoAK/v8r+AOv7/KACv4A6/v8r+AOgD+/wAooooA/gDooooA/v8AKKKKAP4A6KKKACv7/K/gDr+/ygD+AOv7/K/gDr+/ygAooooA/gDooooA/v8AKKKKACv4A6/v8r+AOgD+/wAr+AOv7/K/gDoAK/v8r+AOv7/KAP4A6KKKAP7/ACv4A6/v8r+AOgAr+/yv4A6/v8oAKKKKAP4A6/v8r+AOv7/KACiiigAr+AOv7/K/gDoA/v8AKKKKAP4A6KKKAP7/ACv4A6/v8r+AOgAr+/yv4A6/v8oAKKKKAP4A6KKKACv7/K/gDr+/ygD+AOv7/K/gDr+/ygD+AOiiigAooooA/v8AK/gDr+/yv4A6AP7/ACiiigD+AOv7/K/gDr+/ygAooooAK/gDr+/yv4A6AP7/ACiiigAr+AOv7/K/gDoA/v8AK/gDr+/yv4A6ACv7/K/gDr+/ygAooooA/gDr+/yv4A6/v8oA/gDooooAK/v8r+AOv7/KACiiigD+AOiiigD+/wAr+AOv7/K/gDoA/v8AKKKKAP4A6KKKACv7/K/gDr+/ygD+AOiiigD+/wAooooA/gDr+/yv4A6/v8oA/gDooooAK/v8r+AOv7/KAP4A6KKKACiiigD+/wAr+AOv7/K/gDoAK/v8r+AOv7/KAP4A6KKKAP7/ACiiigD+AOiiigD+/wAooooA/gDooooA/v8AK/gDr+/yv4A6ACv7/K/gDr+/ygAr+AOv7/K/gDoAK/v8r+AOv7/KACv4A6/v8r+AOgAr+/yv4A6/v8oA/gDooooA/v8AKKKKAP4A6KKKAP7/ACiiigD+AOiiigD+/wAr+AOv7/K/gDoAK/v8r+AOv7/KACv4A6/v8r+AOgAr+/yv4A6/v8oAK/gDr+/yv4A6AP7/ACiiigD+AOiiigD+/wAooooA/gDooooAK/v8r+AOv7/KAP4A6/v8r+AOv7/KACiiigD+AOiiigD+/wAooooAK/gDr+/yv4A6AP7/ACv4A6/v8r+AOgAr+/yv4A6/v8oA/gDooooA/v8AK/gDr+/yv4A6ACv7/K/gDr+/ygAooooA/gDr+/yv4A6/v8oAKKKKACv4A6/v8r+AOgD+/wAooooA/gDooooA/v8AK/gDr+/yv4A6ACv7/K/gDr+/ygAooooA/gDooooAK/v8r+AOv7/KAP4A6/v8r+AOv7/KAP4A6KKKACiiigD+/wAr+AOv7/K/gDoA/v8AKKKKAP4A6/v8r+AOv7/KACiiigAr+AOv7/K/gDoA/v8AKKKKACv4A6/v8r+AOgD+/wAr+AOv7/K/gDoAK/v8r+AOv7/KACiiigD+AOv7/K/gDr+/ygD+AOiiigAr+/yv4A6/v8oAKKKKAP4A6KKKAP7/ACv4A6/v8r+AOgD+/wAooooA/gDooooAK/v8r+AOv7/KAP4A6KKKAP7/ACiiigD+AOv7/K/gDr+/ygD+AOiiigAr+/yv4A6/v8oA/gDooooAKKKKAP7/ACv4A6/v8r+AOgAr+/yv4A6/v8oA/gDooooA/v8AKKKKAP4A6KKKAP7/ACiiigD+AOiiigD+/wAr+AOv7/K/gDoAK/v8r+AOv7/KACv4A6/v8r+AOgAr+/yv4A6/v8oAK/gDr+/yv4A6ACv7/K/gDr+/ygD+AOiiigD+/wAooooA/gDooooA/v8AKKKKAP4A6KKKAP7/ACv4A6/v8r+AOgAr+/yv4A6/v8oAK/gDr+/yv4A6ACv7/K/gDr+/ygAr+AOv7/K/gDoA/v8AKKKKAP4A6KKKAP7/ACiiigD+AOiiigAr+/yv4A6/v8oA/gDr+/yv4A6/v8oAKKKKAP4A6KKKAP7/ACiiigAr+AOv7/K/gDoA/v8AK/gDr+/yv4A6ACv7/K/gDr+/ygD+AOiiigD+/wAr+AOv7/K/gDoAK/v8r+AOv7/KACiiigD+AOv7/K/gDr+/ygAooooAK/gDr+/yv4A6AP7/ACiiigD+AOiiigD+/wAr+AOv7/K/gDoAK/v8r+AOv7/KACiiigD+AOiiigAr+/yv4A6/v8oA/gDr+/yv4A6/v8oA/gDooooAKKKKAP7/ACv4A6/v8r+AOgD+/wAooooA/gDr+/yv4A6/v8oAKKKKACv4A6/v8r+AOgD+/wAooooAK/gDr+/yv4A6AP7/ACv4A6/v8r+AOgAr+/yv4A6/v8oAKKKKAP4A6/v8r+AOv7/KAP4A6KKKACv7/K/gDr+/ygAooooA/gDooooA/v8AK/gDr+/yv4A6AP7/ACiiigD+AOiiigAr+/yv4A6/v8oA/gDooooA/v8AKKKKAP4A6/v8r+AOv7/KAP4A6KKKACv7/K/gDr+/ygD+AOiiigAooooA/v8AK/gDr+/yv4A6ACv7/K/gDr+/ygD+AOiiigD+/wAooooA/gDooooA/v8AKKKKAP4A6KKKAP7/ACv4A6/v8r+AOgAr+/yv4A6/v8oAK/gDr+/yv4A6ACv7/K/gDr+/ygAr+AOv7/K/gDoAK/v8r+AOv7/KAP4A6KKKAP7/ACiiigD+AOiiigD+/wAooooA/gDooooA/v8AK/gDr+/yv4A6ACv7/K/gDr+/ygAr+AOv7/K/gDoAK/v8r+AOv7/KACv4A6/v8r+AOgD+/wAooooA/gDooooA/v8AKKKKAP4A6KKKACv7/K/gDr+/ygD+AOv7/K/gDr+/ygAooooA/gDooooA/v8AKKKKACv4A6/v8r+AOgD+/wAr+AOv7/K/gDoAK/v8r+AOv7/KAP4A6KKKAP7/ACv4A6/v8r+AOgAr+/yv4A6/v8oAKKKKAP4A6/v8r+AOv7/KACiiigAr+AOv7/K/gDoA/v8AKKKKAP4A6KKKAP7/ACv4A6/v8r+AOgAr+/yv4A6/v8oAKKKKAP4A6KKKACv7/K/gDr+/ygD+AOv7/K/gDr+/ygD+AOiiigAooooA/v8AK/gDr+/yv4A6AP7/ACiiigD+AOv7/K/gDr+/ygAooooAK/gDr+/yv4A6AP7/ACiiigAr+AOv7/K/gDoA/v8AK/gDr+/yv4A6ACv7/K/gDr+/ygAooooA/gDr+/yv4A6/v8oA/gDooooAK/v8r+AOv7/KACiiigD+AOiiigD+/wAr+AOv7/K/gDoA/v8AKKKKAP4A6KKKACv7/K/gDr+/ygD+AOiiigD+/wAooooA/gDr+/yv4A6/v8oA/gDooooAK/v8r+AOv7/KAP4A6KKKACiiigD+/wAr+AOv7/K/gDoAK/v8r+AOv7/KAP4A6KKKAP7/ACiiigD+AOiiigD+/wAooooA/gDooooA/v8AK/gDr+/yv4A6ACv7/K/gDr+/ygAr+AOv7/K/gDoAK/v8r+AOv7/KACv4A6/v8r+AOgAr+/yv4A6/v8oA/gDooooA/v8AKKKKAP4A6KKKAP7/ACiiigD+AOiiigD+/wAr+AOv7/K/gDoAK/v8r+AOv7/KACv4A6/v8r+AOgAr+/yv4A6/v8oAK/gDr+/yv4A6AP7/ACiiigD+AOiiigD+/wAooooA/gDooooAK/v8r+AOv7/KAP4A6/v8r+AOv7/KACiiigD+AOiiigD+/wAooooAK/gDr+/yv4A6AP7/ACv4A6/v8r+AOgAr+/yv4A6/v8oA/gDooooA/v8AK/gDr+/yv4A6ACv7/K/gDr+/ygAooooA/gDr+/yv4A6/v8oAKKKKACv4A6/v8r+AOgD+/wAooooA/gDooooA/v8AK/gDr+/yv4A6ACv7/K/gDr+/ygAooooA/gDooooAK/v8r+AOv7/KAP4A6/v8r+AOv7/KAP4A6KKKACiiigD+/wAr+AOv7/K/gDoA/v8AKKKKAP4A6/v8r+AOv7/KACiiigAr+AOv7/K/gDoA/v8AKKKKACv4A6/v8r+AOgD+/wAr+AOv7/K/gDoAK/v8r+AOv7/KACiiigD+AOv7/K/gDr+/ygD+AOiiigAr+/yv4A6/v8oAKKKKAP4A6KKKAP7/ACv4A6/v8r+AOgD+/wAooooA/gDooooAK/v8r+AOv7/KAP4A6KKKAP7/ACiiigD+AOv7/K/gDr+/ygD+AOiiigAr+/yv4A6/v8oA/gDooooAKKKKAP7/ACv4A6/v8r+AOgAr+/yv4A6/v8oA/gDooooA/v8AKKKKAP4A6KKKAP7/ACiiigD+AOiiigD+/wAr+AOv7/K/gDoAK/v8r+AOv7/KACv4A6/v8r+AOgAr+/yv4A6/v8oAK/gDr+/yv4A6ACv7/K/gDr+/ygD+AOiiigD+/wAooooA/gDooooA/v8AKKKKAP4A6KKKAP7/ACv4A6/v8r+AOgAr+/yv4A6/v8oAK/gDr+/yv4A6ACv7/K/gDr+/ygAr+AOv7/K/gDoA/v8AKKKKAP4A6KKKAP7/ACiiigD+AOiiigAr+/yv4A6/v8oA/gDr+/yv4A6/v8oAKKKKAP4A6KKKAP7/ACiiigAr+AOv7/K/gDoA/v8AK/gDr+/yv4A6ACv7/K/gDr+/ygD+AOiiigD+/wAr+AOv7/K/gDoAK/v8r+AOv7/KACiiigD+AOv7/K/gDr+/ygAooooAK/gDr+/yv4A6AP7/ACiiigD+AOiiigD+/wAr+AOv7/K/gDoAK/v8r+AOv7/KACiiigD+AOiiigAr+/yv4A6/v8oA/gDr+/yv4A6/v8oA/gDooooAKKKKAP7/ACv4A6/v8r+AOgD+/wAooooA/gDr+/yv4A6/v8oAKKKKACv4A6/v8r+AOgD+/wAooooAK/gDr+/yv4A6AP7/ACv4A6/v8r+AOgAr+/yv4A6/v8oAKKKKAP4A6/v8r+AOv7/KAP4A6KKKACv7/K/gDr+/ygAooooA/gDooooA/v8AK/gDr+/yv4A6AP7/ACiiigD+AOiiigAr+/yv4A6/v8oA/gDooooA/v8AKKKKAP4A6/v8r+AOv7/KAP4A6KKKACv7/K/gDr+/ygD+AOiiigAooooA/v8AK/gDr+/yv4A6ACv7/K/gDr+/ygD+AOiiigD+/wAooooA/gDooooA/v8AKKKKAP4A6KKKAP7/ACv4A6/v8r+AOgAr+/yv4A6/v8oAK/gDr+/yv4A6ACv7/K/gDr+/ygAr+AOv7/K/gDoAK/v8r+AOv7/KAP4A6KKKAP7/ACiiigD+AOiiigD+/wAooooA/gDooooA/v8AK/gDr+/yv4A6ACv7/K/gDr+/ygAr+AOv7/K/gDoAK/v8r+AOv7/KACv4A6/v8r+AOgD+/wAooooA/gDooooA/v8AKKKKAP4A6KKKACv7/K/gDr+/ygD+AOv7/K/gDr+/ygAooooA/gDooooA/v8AKKKKACv4A6/v8r+AOgD+/wAr+AOv7/K/gDoAK/v8r+AOv7/KAP4A6KKKAP7/ACv4A6/v8r+AOgAr+/yv4A6/v8oAKKKKAP4A6/v8r+AOv7/KACiiigAr+AOv7/K/gDoA/v8AKKKKAP4A6KKKAP7/ACv4A6/v8r+AOgAr+/yv4A6/v8oAKKKKAP4A6KKKACv7/K/gDr+/ygD+AOv7/K/gDr+/ygD+AOiiigAooooA/v8AK/gDr+/yv4A6AP7/ACiiigD+AOv7/K/gDr+/ygAooooAK/gDr+/yv4A6AP7/ACiiigAr+AOv7/K/gDoA/v8AK/gDr+/yv4A6ACv7/K/gDr+/ygAooooA/gDr+/yv4A6/v8oA/gDooooAK/v8r+AOv7/KACiiigD+AOiiigD+/wAr+AOv7/K/gDoA/v8AKKKKAP4A6KKKACv7/K/gDr+/ygD+AOiiigD+/wAooooA/gDr+/yv4A6/v8oA/gDooooAK/v8r+AOv7/KAP4A6KKKACiiigD+/wAr+AOv7/K/gDoAK/v8r+AOv7/KAP4A6KKKAP7/ACiiigD+AOiiigD+/wAooooA/gDooooA/v8AK/gDr+/yv4A6ACv7/K/gDr+/ygAr+AOv7/K/gDoAK/v8r+AOv7/KACv4A6/v8r+AOgAr+/yv4A6/v8oA/gDooooA/v8AKKKKAP4A6KKKAP7/ACiiigD+AOiiigD+/wAr+AOv7/K/gDoAK/v8r+AOv7/KACv4A6/v8r+AOgAr+/yv4A6/v8oAK/gDr+/yv4A6AP7/ACiiigD+AOiiigD+/wAooooA/gDooooAK/v8r+AOv7/KAP4A6/v8r+AOv7/KACiiigD+AOiiigD+/wAooooAK/gDr+/yv4A6AP7/ACv4A6/v8r+AOgAr+/yv4A6/v8oA/gDooooA/v8AK/gDr+/yv4A6ACv7/K/gDr+/ygAooooA/gDr+/yv4A6/v8oAKKKKACv4A6/v8r+AOgD+/wAooooA/gDooooA/v8AK/gDr+/yv4A6ACv7/K/gDr+/ygAooooA/gDooooAK/v8r+AOv7/KAP4A6/v8r+AOv7/KAP4A6KKKACiiigD+/wAr+AOv7/K/gDoA/v8AKKKKAP4A6/v8r+AOv7/KACiiigAr+AOv7/K/gDoA/v8AKKKKACv4A6/v8r+AOgD+/wAr+AOv7/K/gDoAK/v8r+AOv7/KACiiigD+AOv7/K/gDr+/ygD+AOiiigAr+/yv4A6/v8oAKKKKAP4A6KKKAP7/ACv4A6/v8r+AOgD+/wAooooA/gDooooAK/v8r+AOv7/KAP4A6KKKAP7/ACiiigD+AOv7/K/gDr+/ygD+AOiiigAr+/yv4A6/v8oA/gDooooAKKKKAP7/ACv4A6/v8r+AOgAr+/yv4A6/v8oA/gDooooA/v8AKKKKAP4A6KKKAP7/ACiiigD+AOiiigD+/wAr+AOv7/K/gDoAK/v8r+AOv7/KACv4A6/v8r+AOgAr+/yv4A6/v8oAK/gDr+/yv4A6ACv7/K/gDr+/ygD+AOiiigD+/wAooooA/gDooooA/v8AKKKKAP4A6KKKAP7/ACv4A6/v8r+AOgAr+/yv4A6/v8oAK/gDr+/yv4A6ACv7/K/gDr+/ygAr+AOv7/K/gDoA/v8AKKKKAP4A6KKKAP7/ACiiigD+AOiiigAr+/yv4A6/v8oA/gDr+/yv4A6/v8oAKKKKAP4A6KKKAP7/ACiiigAr+AOv7/K/gDoA/v8AK/gDr+/yv4A6ACv7/K/gDr+/ygD+AOiiigD+/wAr+AOv7/K/gDoAK/v8r+AOv7/KACiiigD+AOv7/K/gDr+/ygAooooAK/gDr+/yv4A6AP7/ACiiigD+AOiiigD+/wAr+AOv7/K/gDoAK/v8r+AOv7/KACiiigD+AOiiigAr+/yv4A6/v8oA/gDr+/yv4A6/v8oA/gDooooAKKKKAP7/ACv4A6/v8r+AOgD+/wAooooA/gDr+/yv4A6/v8oAKKKKACv4A6/v8r+AOgD+/wAooooAK/gDr+/yv4A6AP7/ACv4A6/v8r+AOgAr+/yv4A6/v8oAKKKKAP4A6/v8r+AOv7/KAP4A6KKKACv7/K/gDr+/ygAooooA/gDooooA/v8AK/gDr+/yv4A6AP7/ACiiigD+AOiiigAr+/yv4A6/v8oA/gDooooA/v8AKKKKAP4A6/v8r+AOv7/KAP4A6KKKACv7/K/gDr+/ygD+AOiiigAooooA/v8AK/gDr+/yv4A6ACv7/K/gDr+/ygD+AOiiigD+/wAooooA/gDooooA/v8AKKKKAP4A6KKKAP7/ACv4A6/v8r+AOgAr+/yv4A6/v8oAK/gDr+/yv4A6ACv7/K/gDr+/ygAr+AOv7/K/gDoAK/v8r+AOv7/KAP4A6KKKAP7/ACiiigD+AOiiigD+/wAooooA/gDooooA/v8AK/gDr+/yv4A6ACv7/K/gDr+/ygAr+AOv7/K/gDoAK/v8r+AOv7/KACv4A6/v8r+AOgD+/wAooooA/gDooooA/v8AKKKKAP4A6KKKACv7/K/gDr+/ygD+AOv7/K/gDr+/ygAooooA/gDooooA/v8AKKKKACv4A6/v8r+AOgD+/wAr+AOv7/K/gDoAK/v8r+AOv7/KAP4A6KKKAP7/ACv4A6/v8r+AOgAr+/yv4A6/v8oAKKKKAP4A6/v8r+AOv7/KACiiigAr+AOv7/K/gDoA/v8AKKKKAP4A6KKKAP7/ACv4A6/v8r+AOgAr+/yv4A6/v8oAKKKKAP4A6KKKACv7/K/gDr+/ygD+AOv7/K/gDr+/ygD+AOiiigAooooA/v8AK/gDr+/yv4A6AP7/ACiiigD+AOv7/K/gDr+/ygAooooAK/gDr+/yv4A6AP7/ACiiigAr+AOv7/K/gDoA/v8AK/gDr+/yv4A6ACv7/K/gDr+/ygAooooA/gDr+/yv4A6/v8oA/gDooooAK/v8r+AOv7/KACiiigD+AOiiigD+/wAr+AOv7/K/gDoA/v8AKKKKAP4A6KKKACv7/K/gDr+/ygD+AOiiigD+/wAooooA/gDr+/yv4A6/v8oA/gDooooAK/v8r+AOv7/KAP4A6KKKACiiigD+/wAr+AOv7/K/gDoAK/v8r+AOv7/KAP4A6KKKAP7/ACiiigD+AOiiigD+/wAooooA/gDooooA/v8AK/gDr+/yv4A6ACv7/K/gDr+/ygAr+AOv7/K/gDoAK/v8r+AOv7/KACv4A6/v8r+AOgAr+/yv4A6/v8oA/gDooooA/v8AKKKKAP4A6KKKAP7/ACiiigD+AOiiigD+/wAr+AOv7/K/gDoAK/v8r+AOv7/KACv4A6/v8r+AOgAr+/yv4A6/v8oAK/gDr+/yv4A6AP7/ACiiigD+AOiiigD+/wAooooA/gDooooAK/v8r+AOv7/KAP4A6/v8r+AOv7/KACiiigD+AOiiigD+/wAooooAK/gDr+/yv4A6AP7/ACv4A6/v8r+AOgAr+/yv4A6/v8oA/gDooooA/v8AK/gDr+/yv4A6ACv7/K/gDr+/ygAooooA/gDr+/yv4A6/v8oAKKKKACv4A6/v8r+AOgD+/wAooooA/gDooooA/v8AK/gDr+/yv4A6ACv7/K/gDr+/ygAooooA/gDooooAK/v8r+AOv7/KAP4A6/v8r+AOv7/KAP4A6KKKACiiigD+/wAr+AOiigD+/wAooooA/gDr+/yiigAooooAK/gDoooA/v8AKKKKACv4A6KKAP7/ACv4A6KKACv7/KKKACiiigD+AOv7/KKKAP4A6KKKACv7/KKKACiiigD+AOiiigD+/wAr+AOiigD+/wAooooA/gDooooAK/v8oooA/gDooooA/v8AKKKKAP4A6/v8oooA/gDooooAK/v8oooA/gDooooAKKKKAP7/ACv4A6KKACv7/KKKAP4A6KKKAP7/ACiiigD+AOiiigD+/wAooooA/gDooooA/v8AK/gDoooAK/v8oooAK/gDoooAK/v8oooAK/gDoooAK/v8oooA/gDooooA/v8AKKKKAP4A6KKKAP7/ACiiigD+AOiiigD+/wAr+AOiigAr+/yiigAr+AOiigAr+/yiigAr+AOiigD+/wAooooA/gDooooA/v8AKKKKAP4A6KKKACv7/KKKAP4A6/v8oooAKKKKAP4A6KKKAP7/ACiiigAr+AOiigD+/wAr+AOiigAr+/yiigD+AOiiigD+/wAr+AOiigAr+/yiigAooooA/gDr+/yiigAooooAK/gDoooA/v8AKKKKAP4A6KKKAP7/ACv4A6KKACv7/KKKACiiigD+AOiiigAr+/yiigD+AOv7/KKKAP4A6KKKAP/ZCmVuZHN0cmVhbQplbmRvYmoKMTUgMCBvYmoKMjc5MDEgZW5kb2JqCjEzIDAgb2JqCjw8L1R5cGUgL0ZvbnQgL1N1YnR5cGUgL1R5cGUwIC9CYXNlRm9udCAvQXJpYWxVbmljb2RlTVMgL0VuY29kaW5nIC9JZGVudGl0eS1IIC9EZXNjZW5kYW50Rm9udHMgWzE2IDAgUiBdCi9Ub1VuaWNvZGUgMTcgMCBSID4+CmVuZG9iagoxNyAwIG9iago8PC9MZW5ndGggNjAyID4+CnN0cmVhbQovQ0lESW5pdCAvUHJvY1NldCBmaW5kcmVzb3VyY2UgYmVnaW4KMTIgZGljdCBiZWdpbgpiZWdpbmNtYXAKL0NJRFN5c3RlbUluZm8gPDwgL1JlZ2lzdHJ5IChBZG9iZSkgL09yZGVyaW5nIChVQ1MpIC9TdXBwbGVtZW50IDAgPj4gZGVmCi9DTWFwTmFtZSAvQWRvYmUtSWRlbnRpdHktVUNTIGRlZgovQ01hcFR5cGUgMiBkZWYKMSBiZWdpbmNvZGVzcGFjZXJhbmdlCjwwMDAwPiA8RkZGRj4KZW5kY29kZXNwYWNlcmFuZ2UKMiBiZWdpbmJmcmFuZ2UKPDAwMDA+IDwwMDAwPiA8MDAwMD4KPDAwMDE+IDwwMDIyPiBbPDAwNTM+IDwwMDRGPiA8MDA0RD4gPDAwNDU+IDwwMDIwPiA8MDA0Mz4gPDAwNTA+IDwwMDQxPiA8MDA0RT4gPDAwNTk+IDwwMDMyPiA8MDAzMT4gPDAwMkY+IDwwMDMwPiA8MDAzNj4gPDAwMzM+IDwwMDQ2PiA8MDA3Mj4gPDAwNkY+IDwwMDZEPiA8MDA2NT4gPDAwNjE+IDwwMDc0PiA8MDA3Nj4gPDAwNkU+IDwwMDc1PiA8MDAyQz4gPDAwNEM+IDwwMDY0PiA8MDA0Nz4gPDAwMzQ+IDwwMDQyPiA8MDA1ND4gPDAwMzg+IF0KZW5kYmZyYW5nZQplbmRjbWFwCkNNYXBOYW1lIGN1cnJlbnRkaWN0IC9DTWFwIGRlZmluZXJlc291cmNlIHBvcAplbmQKZW5kCgplbmRzdHJlYW0KZW5kb2JqCjE2IDAgb2JqCjw8L1R5cGUgL0ZvbnQgL1N1YnR5cGUgL0NJREZvbnRUeXBlMiAvQmFzZUZvbnQgL0FyaWFsVW5pY29kZU1TIC9DSURTeXN0ZW1JbmZvIDw8L1JlZ2lzdHJ5IChBZG9iZSkvT3JkZXJpbmcgKElkZW50aXR5KS9TdXBwbGVtZW50IDAgPj4KL0ZvbnREZXNjcmlwdG9yIDE4IDAgUiAvQ0lEVG9HSURNYXAgL0lkZW50aXR5IC9XIFswIFs5OTIgNjYyIDc3MiA4MjYgNjYyIDI3NiA3MTYgNjYyIDY2MiA3MTYgNjYyIDU1MiA1NTIgMjc2IDU1MiA1NTIgNTUyIDYwNiAzMzAgNTUyIDgyNiA1NTIgNTUyIDI3NiA0OTYgNTUyIDU1MiAyNzYgNTUyIDU1MiA3NzIgNTUyIDY2MiA2MDYgNTUyIF0KXQo+PgplbmRvYmoKMTggMCBvYmoKPDwvVHlwZSAvRm9udERlc2NyaXB0b3IgL0ZvbnROYW1lIC9RT0FBQUErQXJpYWxVbmljb2RlTVMgL0ZsYWdzIDQgL0ZvbnRCQm94IFstMTAxMS4yMzA0NiAtMzI5LjU4OTg0IDIyNjAuMjUzOSAxMDc4LjEyNSBdCi9JdGFsaWNBbmdsZSAwIC9Bc2NlbnQgMTA2OC44NDc2NSAvRGVzY2VudCAtMjcwLjk5NjA5IC9DYXBIZWlnaHQgMTA2OC44NDc2NSAvU3RlbVYgNDkuODA0NjkgL0ZvbnRGaWxlMiAxOSAwIFIgPj4KZW5kb2JqCjE5IDAgb2JqCjw8L0xlbmd0aDEgOTg1NiAvTGVuZ3RoIDIwIDAgUiAvRmlsdGVyIC9GbGF0ZURlY29kZSA+PgpzdHJlYW0KeJzVOAlUFGea/19dDQSB0HLFELXaDrQHcrXQ4hNFbhHkRsSz6S7o1j6wD7AlCopIFI94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MjEgMCBvYmoKPDwKL1Byb2R1Y2VyIChGUERGIDEuODQpCi9DcmVhdGlvbkRhdGUgKEQ6MjAyMzA2MjExMTQ1NTYpCj4+CmVuZG9iagoyMiAwIG9iago8PAovVHlwZSAvQ2F0YWxvZwovUGFnZXMgMSAwIFIKPj4KZW5kb2JqCnhyZWYKMCAyMwowMDAwMDAwMDAwIDY1NTM1IGYgCjAwMDAwMDAyNjYgMDAwMDAgbiAKMDAwMDAzNzY4NCAwMDAwMCBuIAowMDAwMDAwMDA5IDAwMDAwIG4gCjAwMDAwMDAwODcgMDAwMDAgbiAKMDAwMDAwMDM1MyAwMDAwMCBuIAowMDAwMDAwNzg3IDAwMDAwIG4gCjAwMDAwMDA5MDAgMDAwMDAgbiAKMDAwMDAwMTIwNSAwMDAwMCBuIAowMDAwMDAxMzA5IDAwMDAwIG4gCjAwMDAwMDI2MTQgMDAwMDAgbiAKMDAwMDAzNzY0NSAwMDAwMCBuIAowMDAwMDM3NTUzIDAwMDAwIG4gCjAwMDAwMzA4ODMgMDAwMDAgbiAKMDAwMDAwMjc4OSAwMDAwMCBuIAowMDAwMDMwODYxIDAwMDAwIG4gCjAwMDAwMzE2NzggMDAwMDAgbiAKMDAwMDAzMTAyNSAwMDAwMCBuIAowMDAwMDMyMDI4IDAwMDAwIG4gCjAwMDAwMzIyNzggMDAwMDAgbiAKMDAwMDAzNzUzMiAwMDAwMCBuIAowMDAwMDM3ODAwIDAwMDAwIG4gCjAwMDAwMzc4NzcgMDAwMDAgbiAKdHJhaWxlcgo8PAovU2l6ZSAyMwovUm9vdCAyMiAwIFIKL0luZm8gMjEgMCBSCj4+CnN0YXJ0eHJlZgozNzkyNwolJUVPRgo="
  );

  const url = "https://shippingapilive.com/api/parcels";
  const login = "parcello";
  const apiKey = "BnbpR4RKFXTx3iz";

  const credentials = `${login}:${apiKey}`;
  const encodedCredentials = btoa(credentials);

  const requestBody = {
    // Your request body here

    is_test: true,
    Service: {
      id: 291,
    },
    order_reference: "unique_reference_123",
    display_id: "display_id_123",
    price: 99.99,
    shipping_cost: 10,
    shipping_cost_currency: "USD",
    currency: "USD",
    cod_value: 99.99,
    cod_currency: "USD",
    gst_number: "1234567890",
    weight: 1.5,
    weight_uom: "kg",
    length: 90,
    width: 50,
    height: 10,
    dimensions_uom: "cm",
    special_instruction: "instruction_example",
    description: "Full description of parcel",
    label_template: "Default",
    label_format: "PdfA4",
    category: "commercial_goods",
    non_delivery_instruction: "by_surface",
    credentials_key: "BnbpR4RKFXTx3iz",
    settings_key: "BnbpR4RKFXTx3iz",
    incoterm: "DDP",
    pod_signature: true,
    logos: ["MzIyMjIyMnJycnJycnIxMg==...", "MzIyMjIyMnJycnJycnIxMg=="],
    send_manifest: true,
    return_address: {
      reference: "ABC1234567890",
      name: "Some Name",
      company: "Some Company",
      email: "your@email.domain",
      phone: "123456789",
      vat: "123456789",
      ioss: "123456789",
      eori: "123456789",
      country: "GB",
      state: "Greater London",
      neighborhood: "Greater London",
      city: "London",
      suburb: "London",
      zip: "N1C4BE",
      addr1: "Street avenue",
      addr2: "Street avenue 2",
      addr3: "Street avenue 3",
      localized_address: "香港跑馬地黃泥涌道 15 號常德樓地下",
      street_number: "123",
      extra_field_1: "Additional information 1",
      extra_field_2: "Additional information 2",
      extra_field_3: "Additional information 3",
    },
    sender_address: {
      reference: "ABC1234567890",
      name: "Some Name",
      company: "Some Company",
      email: "your@email.domain",
      phone: "123456789",
      vat: "123456789",
      ioss: "123456789",
      eori: "123456789",
      country: "GB",
      state: "Greater London",
      neighborhood: "Greater London",
      city: "London",
      suburb: "London",
      zip: "N1C4BE",
      addr1: "Street avenue",
      addr2: "Street avenue 2",
      addr3: "Street avenue 3",
      localized_address: "香港跑馬地黃泥涌道 15 號常德樓地下",
      street_number: "123",
      extra_field_1: "Additional information 1",
      extra_field_2: "Additional information 2",
      extra_field_3: "Additional information 3",
    },
    destination_address: {
      reference: "ABC1234567890",
      name: "Some Name",
      company: "Some Company",
      email: "your@email.domain",
      phone: "123456789",
      vat: "123456789",
      ioss: "123456789",
      eori: "123456789",
      country: "GB",
      state: "Greater London",
      neighborhood: "Greater London",
      city: "London",
      suburb: "London",
      zip: "N1C4BE",
      addr1: "Street avenue",
      addr2: "Street avenue 2",
      addr3: "Street avenue 3",
      localized_address: "香港跑馬地黃泥涌道 15 號常德樓地下",
      street_number: "123",
      extra_field_1: "Additional information 1",
      extra_field_2: "Additional information 2",
      extra_field_3: "Additional information 3",
    },
    pudo: {
      pudo_id: "123",
    },
    items: [
      {
        hs_code: "999999999",
        sku_code: "ABC123",
        sku_desc: "Black leather jacket",
        quantity: 2,
        price: 99.99,
        total_price: 99.99,
        currency: "USD",
        gst_number: "1234567890",
        weight: 1.5,
        total_weight: 3,
        weight_uom: "kg",
        length: 90,
        width: 50,
        height: 10,
        dimensions_uom: "cm",
        country_of_origin: "CN",
        link: "www.example.com",
        additional: {},
      },
    ],
    collection_date: {
      date: "2023-06-26",
      time_from: "10:00",
      time_to: "15:30",
    },
    delivery_date: {
      date: "2023-06-26",
      time_from: "10:00",
      time_to: "15:30",
    },
    additional: {},
  };

  const getOrderLabel = async () => {
    try {
      const response = await axios.post(url, requestBody, {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Basic ${encodedCredentials}`,
        },
      });

      // Request successful, handle the response
      console.log(response.data);
    } catch (error) {
      // Request failed, handle the error
      console.error(error);
    }
  };

  return (
    <div className=" w-full flex flex-col">
      <div className="overflow-x-auto">
        <div className="p-20-04-2023.5 w-full inline-block align-middle">
          <div className="overflow-hidden border rounded-lg">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  <th scope="col" className="py-3 pl-4">
                    <div className="flex items-center h-5">
                      <input
                        id="checkbox-all"
                        type="checkbox"
                        className="text-blue-600 border-gray-200 rounded focus:ring-blue-500"
                      />
                      <label htmlFor="checkbox" className="sr-only">
                        Checkbox
                      </label>
                    </div>
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-3 text-xs font-bold text-left text-gray-500 uppercase "
                  >
                    Date
                  </th>

                  <th
                    scope="col"
                    className="px-6 py-3 text-xs font-bold text-left text-gray-500 uppercase "
                  >
                    From
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-3 text-xs font-bold text-left text-gray-500 uppercase "
                  >
                    To
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-3 text-xs font-bold text-right text-gray-500 uppercase "
                  >
                    Status
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-3 text-xs font-bold text-right text-gray-500 uppercase "
                  >
                    Payment
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-3 text-xs font-bold text-right text-gray-500 uppercase "
                  >
                    Label
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                <tr>
                  <td className="py-3 pl-4">
                    <div className="flex items-center h-5">
                      <input
                        type="checkbox"
                        className="text-blue-600 border-gray-200 rounded focus:ring-blue-500"
                      />
                      <label htmlFor="checkbox" className="sr-only">
                        Checkbox
                      </label>
                    </div>
                  </td>
                  <td className="px-6 py-4 text-sm font-medium text-gray-800 whitespace-nowrap">
                    20-04-2023
                  </td>
                  <td className="px-6 py-4 text-sm text-gray-800 whitespace-nowrap">
                    Jone Doe
                  </td>
                  <td className="px-6 py-4 text-sm text-gray-800 whitespace-nowrap">
                    Jason
                  </td>
                  <td className="px-6 py-4 text-sm font-medium text-right whitespace-nowrap">
                    <a className="text-green-500 hover:text-green-700" href="#">
                      Delivered
                    </a>
                  </td>
                  <td className="px-6 py-4 text-sm font-medium text-right whitespace-nowrap">
                    <a className="text-red-500 hover:text-red-700" href="#">
                      Pending
                    </a>
                  </td>
                  <td className="px-6 py-4 text-sm font-medium text-right whitespace-nowrap">
                    {/* <a href="#">...</a> */}
                    <div className="flex justify-end">
                      <a
                        download="PDF Title"
                        href={`data:application/pdf;base64,${base64STR}`}
                        className="bg-yellow-400 p-4 rounded-[10px]"
                      >
                        {" "}
                        <AiOutlineDownload />
                      </a>
                    </div>
                    {/* <BiSolidDownload></BiSolidDownload> */}
                  </td>
                </tr>
                <tr>
                  <td className="py-3 pl-4">
                    <div className="flex items-center h-5">
                      <input
                        type="checkbox"
                        className="text-blue-600 border-gray-200 rounded focus:ring-blue-500"
                      />
                      <label htmlFor="checkbox" className="sr-only">
                        Checkbox
                      </label>
                    </div>
                  </td>
                  <td className="px-6 py-4 text-sm font-medium text-gray-800 whitespace-nowrap">
                    20-04-2023
                  </td>
                  <td className="px-6 py-4 text-sm text-gray-800 whitespace-nowrap">
                    Jone Doe
                  </td>
                  <td className="px-6 py-4 text-sm text-gray-800 whitespace-nowrap">
                    Jason
                  </td>
                  <td className="px-6 py-4 text-sm font-medium text-right whitespace-nowrap">
                    <a
                      className="text-yellow-500 hover:text-yellow-700"
                      href="#"
                    >
                      Shipping
                    </a>
                  </td>
                  <td className="px-6 py-4 text-sm font-medium text-right whitespace-nowrap">
                    <a className="text-green-500 hover:text-green-700" href="#">
                      Success
                    </a>
                  </td>
                  <td className="px-6 py-4 text-sm font-medium text-right whitespace-nowrap">
                    {/* <a href="#">...</a> */}
                    <div className="flex justify-end">
                      <a
                        download="PDF Title"
                        href={`data:application/pdf;base64,${base64STR}`}
                        className="bg-yellow-400 p-4 rounded-[10px]"
                      >
                        {" "}
                        <AiOutlineDownload />
                      </a>
                    </div>
                  </td>
                </tr>
                <tr>
                  <td className="py-3 pl-4">
                    <div className="flex items-center h-5">
                      <input
                        type="checkbox"
                        className="text-blue-600 border-gray-200 rounded focus:ring-blue-500"
                      />
                      <label htmlFor="checkbox" className="sr-only">
                        Checkbox
                      </label>
                    </div>
                  </td>
                  <td className="px-6 py-4 text-sm font-medium text-gray-800 whitespace-nowrap">
                    20-04-2023
                  </td>
                  <td className="px-6 py-4 text-sm text-gray-800 whitespace-nowrap">
                    Jone Doe
                  </td>
                  <td className="px-6 py-4 text-sm text-gray-800 whitespace-nowrap">
                    Jason
                  </td>
                  <td className="px-6 py-4 text-sm font-medium text-right whitespace-nowrap">
                    <a className="text-green-500 hover:text-green-700" href="#">
                      Delivered
                    </a>
                  </td>
                  <td className="px-6 py-4 text-sm font-medium text-right whitespace-nowrap">
                    <a className="text-red-500 hover:text-red-700" href="#">
                      Pending
                    </a>
                  </td>
                  <td className="px-6 py-4 text-sm font-medium text-right whitespace-nowrap">
                    {/* <a href="#">...</a> */}
                    <div className="flex justify-end">
                      <a
                        download="PDF Title"
                        href={`data:application/pdf;base64,${base64STR}`}
                        className="bg-yellow-400 p-4 rounded-[10px]"
                      >
                        {" "}
                        <AiOutlineDownload />
                      </a>
                    </div>
                  </td>
                </tr>
                <tr>
                  <td className="py-3 pl-4">
                    <div className="flex items-center h-5">
                      <input
                        type="checkbox"
                        className="text-blue-600 border-gray-200 rounded focus:ring-blue-500"
                      />
                      <label htmlFor="checkbox" className="sr-only">
                        Checkbox
                      </label>
                    </div>
                  </td>
                  <td className="px-6 py-4 text-sm font-medium text-gray-800 whitespace-nowrap">
                    20-04-2023
                  </td>
                  <td className="px-6 py-4 text-sm text-gray-800 whitespace-nowrap">
                    Jone Doe
                  </td>
                  <td className="px-6 py-4 text-sm text-gray-800 whitespace-nowrap">
                    Jason
                  </td>
                  <td className="px-6 py-4 text-sm font-medium text-right whitespace-nowrap">
                    <a className="text-red-500 hover:text-red-700" href="#">
                      Cancled
                    </a>
                  </td>
                  <td className="px-6 py-4 text-sm font-medium text-right whitespace-nowrap">
                    <a className="text-red-500 hover:text-red-700" href="#">
                      Pending
                    </a>
                  </td>
                  <td className="px-6 py-4 text-sm font-medium text-right whitespace-nowrap">
                    {/* <a href="#">...</a> */}
                    <div className="flex justify-end">
                      <a
                        download="PDF Title"
                        href={`data:application/pdf;base64,${base64STR}`}
                        className="bg-yellow-400 p-4 rounded-[10px]"
                      >
                        {" "}
                        <AiOutlineDownload />
                      </a>
                    </div>
                  </td>
                </tr>
                <tr>
                  <td className="py-3 pl-4">
                    <div className="flex items-center h-5">
                      <input
                        type="checkbox"
                        className="text-blue-600 border-gray-200 rounded focus:ring-blue-500"
                      />
                      <label htmlFor="checkbox" className="sr-only">
                        Checkbox
                      </label>
                    </div>
                  </td>
                  <td className="px-6 py-4 text-sm font-medium text-gray-800 whitespace-nowrap">
                    20-04-2023
                  </td>
                  <td className="px-6 py-4 text-sm text-gray-800 whitespace-nowrap">
                    Jone Doe
                  </td>
                  <td className="px-6 py-4 text-sm text-gray-800 whitespace-nowrap">
                    Jason
                  </td>
                  <td className="px-6 py-4 text-sm font-medium text-right whitespace-nowrap">
                    <a className="text-green-500 hover:text-green-700" href="#">
                      Delivered
                    </a>
                  </td>
                  <td className="px-6 py-4 text-sm font-medium text-right whitespace-nowrap">
                    <a className="text-red-500 hover:text-red-700" href="#">
                      Pending
                    </a>
                  </td>
                  <td className="px-6 py-4 text-sm font-medium text-right whitespace-nowrap">
                    {/* <a href="#">...</a> */}
                    <div className="flex justify-end">
                      <a
                        download="PDF Title"
                        href={`data:application/pdf;base64,${base64STR}`}
                        className="bg-yellow-400 p-4 rounded-[10px]"
                      >
                        {" "}
                        <AiOutlineDownload />
                      </a>
                    </div>
                  </td>
                </tr>
                <tr>
                  <td className="py-3 pl-4">
                    <div className="flex items-center h-5">
                      <input
                        type="checkbox"
                        className="text-blue-600 border-gray-200 rounded focus:ring-blue-500"
                      />
                      <label htmlFor="checkbox" className="sr-only">
                        Checkbox
                      </label>
                    </div>
                  </td>
                  <td className="px-6 py-4 text-sm font-medium text-gray-800 whitespace-nowrap">
                    20-04-2023
                  </td>
                  <td className="px-6 py-4 text-sm text-gray-800 whitespace-nowrap">
                    Jone Doe
                  </td>
                  <td className="px-6 py-4 text-sm text-gray-800 whitespace-nowrap">
                    Jason
                  </td>
                  <td className="px-6 py-4 text-sm font-medium text-right whitespace-nowrap">
                    <a className="text-green-500 hover:text-green-700" href="#">
                      Delivered
                    </a>
                  </td>
                  <td className="px-6 py-4 text-sm font-medium text-right whitespace-nowrap">
                    <a className="text-red-500 hover:text-red-700" href="#">
                      Pending
                    </a>
                  </td>
                  <td className="px-6 py-4 text-sm font-medium text-right whitespace-nowrap">
                    {/* <a href="#">...</a> */}
                    <div className="flex justify-end">
                      <a
                        download="PDF Title"
                        href={`data:application/pdf;base64,${base64STR}`}
                        className="bg-yellow-400 p-4 rounded-[10px]"
                      >
                        {" "}
                        <AiOutlineDownload />
                      </a>
                    </div>
                  </td>
                </tr>
                <tr>
                  <td className="py-3 pl-4">
                    <div className="flex items-center h-5">
                      <input
                        type="checkbox"
                        className="text-blue-600 border-gray-200 rounded focus:ring-blue-500"
                      />
                      <label htmlFor="checkbox" className="sr-only">
                        Checkbox
                      </label>
                    </div>
                  </td>
                  <td className="px-6 py-4 text-sm font-medium text-gray-800 whitespace-nowrap">
                    20-04-2023
                  </td>
                  <td className="px-6 py-4 text-sm text-gray-800 whitespace-nowrap">
                    Jone Doe
                  </td>
                  <td className="px-6 py-4 text-sm text-gray-800 whitespace-nowrap">
                    Jason
                  </td>
                  <td className="px-6 py-4 text-sm font-medium text-right whitespace-nowrap">
                    <a className="text-green-500 hover:text-green-700" href="#">
                      Delivered
                    </a>
                  </td>
                  <td className="px-6 py-4 text-sm font-medium text-right whitespace-nowrap">
                    <a className="text-red-500 hover:text-red-700" href="#">
                      Pending
                    </a>
                  </td>
                  <td className="px-6 py-4 text-sm font-medium text-right whitespace-nowrap">
                    {/* <a href="#">...</a> */}
                    <div className="flex justify-end">
                      <a
                        download="PDF Title"
                        href={`data:application/pdf;base64,${base64STR}`}
                        className="bg-yellow-400 p-4 rounded-[10px]"
                      >
                        {" "}
                        <AiOutlineDownload />
                      </a>
                    </div>
                  </td>
                </tr>
                <tr>
                  <td className="py-3 pl-4">
                    <div className="flex items-center h-5">
                      <input
                        type="checkbox"
                        className="text-blue-600 border-gray-200 rounded focus:ring-blue-500"
                      />
                      <label htmlFor="checkbox" className="sr-only">
                        Checkbox
                      </label>
                    </div>
                  </td>
                  <td className="px-6 py-4 text-sm font-medium text-gray-800 whitespace-nowrap">
                    20-04-2023
                  </td>
                  <td className="px-6 py-4 text-sm text-gray-800 whitespace-nowrap">
                    Jone Doe
                  </td>
                  <td className="px-6 py-4 text-sm text-gray-800 whitespace-nowrap">
                    Jason
                  </td>
                  <td className="px-6 py-4 text-sm font-medium text-right whitespace-nowrap">
                    <a className="text-green-500 hover:text-green-700" href="#">
                      Delivered
                    </a>
                  </td>
                  <td className="px-6 py-4 text-sm font-medium text-right whitespace-nowrap">
                    <a className="text-red-500 hover:text-red-700" href="#">
                      Pending
                    </a>
                  </td>
                  <td className="px-6 py-4 text-sm font-medium text-right whitespace-nowrap">
                    {/* <a href="#">...</a> */}
                    <div className="flex justify-end">
                      <a
                        download="PDF Title"
                        href={`data:application/pdf;base64,${base64STR}`}
                        className="bg-yellow-400 p-4 rounded-[10px]"
                      >
                        {" "}
                        <AiOutlineDownload />
                      </a>
                    </div>
                  </td>
                </tr>
                <tr>
                  <td className="py-3 pl-4">
                    <div className="flex items-center h-5">
                      <input
                        type="checkbox"
                        className="text-blue-600 border-gray-200 rounded focus:ring-blue-500"
                      />
                      <label htmlFor="checkbox" className="sr-only">
                        Checkbox
                      </label>
                    </div>
                  </td>
                  <td className="px-6 py-4 text-sm font-medium text-gray-800 whitespace-nowrap">
                    20-04-2023
                  </td>
                  <td className="px-6 py-4 text-sm text-gray-800 whitespace-nowrap">
                    Jone Doe
                  </td>
                  <td className="px-6 py-4 text-sm text-gray-800 whitespace-nowrap">
                    Jason
                  </td>
                  <td className="px-6 py-4 text-sm font-medium text-right whitespace-nowrap">
                    <a className="text-green-500 hover:text-green-700" href="#">
                      Delivered
                    </a>
                  </td>
                  <td className="px-6 py-4 text-sm font-medium text-right whitespace-nowrap">
                    <a className="text-red-500 hover:text-red-700" href="#">
                      Pending
                    </a>
                  </td>
                  <td className="px-6 py-4 text-sm font-medium text-right whitespace-nowrap">
                    {/* <a href="#">...</a> */}
                    <div className="flex justify-end">
                      <a
                        download="PDF Title"
                        href={`data:application/pdf;base64,${base64STR}`}
                        className="bg-yellow-400 p-4 rounded-[10px]"
                      >
                        {" "}
                        <AiOutlineDownload />
                      </a>
                    </div>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}
