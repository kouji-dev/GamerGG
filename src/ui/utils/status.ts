export const getStatusCls = (status: string) => {
    switch (status) {
       case 'COMPLETED':
           return 'bg-yellow text-black';
       case 'UNPAID':
           return 'bg-re';
       case 'INPROGRESS':
           return 'bg-blue';
    }
}