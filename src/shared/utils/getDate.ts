import {monthNames} from "@/shared/constants/date.ts";

export function getDate() {
    const date = new Date();
    return `последние изменения ${date.getDate()} ${
        monthNames[date.getMonth()]
    } ${date.getFullYear()} в ${date.toLocaleTimeString()}`;
}