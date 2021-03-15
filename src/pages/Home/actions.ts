import moment from 'moment';

export function formatText(text: string) {
    const string = text.trim().toLowerCase();
    return string.charAt(0).toUpperCase() + string.slice(1);
}

export function convertToCelcius(degrees: number): string {
    const celcius = (degrees - 32) * 5/9;
    return celcius.toFixed(0);
}

export function formatDate(date: Date) {
    return moment(date).format('MMMM, DD YYYY HH:mm')+'h';
}