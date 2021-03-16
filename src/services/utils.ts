import moment from 'moment';
import 'moment/locale/pt-br';

export function formatText(text: string) {
    const string = text.trim().toLowerCase();
    return string.charAt(0).toUpperCase() + string.slice(1);
}

export function convertMphToKmh(mph: number) {
    return (mph * 1.60934).toFixed(2);
}

export function formatDate(date: Date) {
    const string = moment(date).locale('pt-br').format('MMMM, DD YYYY HH:mm')+'h';
    return formatText(string);
}

export function formatTime(date: Date) {
    return moment(date).format('HH:mm')+'h';
}