import { SizeEnum } from "../shared-resources/enums/utitlity.enums";
import {
  ButtonColorEnum,
  ButtonTypeEnum,
  ButtonVariantEnum,
} from "./button.enum";

export type ButtonVariant = keyof typeof ButtonVariantEnum;
export type ButtonSize = keyof typeof SizeEnum;
export type ButtonType = keyof typeof ButtonTypeEnum;
export type ButtonColor = keyof typeof ButtonColorEnum;
