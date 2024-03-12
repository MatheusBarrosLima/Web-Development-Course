import { appTheme } from "../styles/appTheme";

type AppTheme = typeof appTheme; 

declare module "styled-components"{
    export interface DefaultTheme extends AppTheme {}
}