export interface LoginTypes {
    username: string;
    password: string;
}

export interface ChartProps {
    chartData: {
        labels: string[];
        datasets: Array<{
            label: string;
            data: number[];
            backgroundColor: string[];
            borderColor: string;
            borderWidth: number;
        }>;
    };
}

export interface Vacante {
    id: number;
    nombre: string;
    vacantes: number;
    inicio: string;
    termino: string;
    jornada: string;
    creadoPor: string;
    estado: string;
}
