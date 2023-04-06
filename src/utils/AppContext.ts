import { createContext } from "react";
import IApplication from "../common/IApplication";

export const AppContext = createContext<IApplication[]>([]);
