export const getStatusCls = (status: string) => {
    switch (status) {
       case 'COMPLETED':
           return 'bg-yellow text-black';
       case 'UNPAID':
           return 'bg-red';
       case 'IN PROGRESS':
           return 'bg-blue';
    }
}