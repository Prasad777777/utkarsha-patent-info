export interface Patent {
    id: number;
    title: string;
    designNo: string;
    patentClass: string;
    registrationDate: string;
    grantedDate: string;
    status: "Granted" | "Pending";
    category: string;
    thumbnail:string
    pdf: string;
    inventors: string[];
  }