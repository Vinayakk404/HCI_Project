// Import dependencies
import {Finger, FingerCurl, FingerDirection, GestureDescription} from 'fingerpose'; 

// Define Gesture Description
 export const loveYouGesture = new GestureDescription('i_love_you'); 


// Index
// loveYouGesture.addCurl(Finger.Index, FingerCurl.NoCurl, 1.0)
// loveYouGesture.addDirection(Finger.Index, FingerDirection.VerticalUp, 0.25);


for(let finger of [Finger.Index,Finger.Middle,Finger.thumb,Finger.Pinky, Finger.Ring]){
    loveYouGesture.addCurl(finger, FingerCurl.NoCurl, 1); 
   // loveYouGesture.addDirection(finger, FingerDirection.VerticalDown, 1);
}



