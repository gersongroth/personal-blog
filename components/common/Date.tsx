import { format, isValid, parseISO } from 'date-fns';

interface DateProps {
    dateString: string;
}

const Date = ({ dateString }: DateProps) => {
    if (!isValid(parseISO(dateString))) {
        return <>No date</>;
    }
    const date = parseISO(dateString);
    return <time dateTime={dateString}>{format(date, 'LLLL	d, yyyy')}</time>;
};

export default Date;
