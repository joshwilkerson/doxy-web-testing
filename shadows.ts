
import { Colors } from './colors';
import { Measures } from './measures';

const focusRingShadow = {  
           offsetX: {
                     measure: 0,
                     unit: "Pixels",
                     css: "0px"
                    },
           offsetY: {
                     measure: 0,
                     unit: "Pixels",
                     css: "0px"
                    },
           radius: {
                    measure: 4,
                    unit: "Pixels",
                    css: "4px"
                   },
           spread: {
                    measure: 1,
                    unit: "Pixels",
                    css: "1px"
                   },
           color: "#458fff33",
         };
const errorRingShadow = {  
           offsetX: {
                     measure: 0,
                     unit: "Pixels",
                     css: "0px"
                    },
           offsetY: {
                     measure: 0,
                     unit: "Pixels",
                     css: "0px"
                    },
           radius: {
                    measure: 4,
                    unit: "Pixels",
                    css: "4px"
                   },
           spread: {
                    measure: 1,
                    unit: "Pixels",
                    css: "1px"
                   },
           color: "#c2443033",
         };
const popoverDropShadow = {  
           offsetX: {
                     measure: 0,
                     unit: "Pixels",
                     css: "0px"
                    },
           offsetY: {
                     measure: 4,
                     unit: "Pixels",
                     css: "4px"
                    },
           radius: {
                    measure: 4,
                    unit: "Pixels",
                    css: "4px"
                   },
           spread: {
                    measure: 0,
                    unit: "Pixels",
                    css: "0px"
                   },
           color: "#00000040",
         };


export const Shadows = {
      focusRingShadow,
      errorRingShadow,
      popoverDropShadow,
}