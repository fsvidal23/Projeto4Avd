declare namespace Express {
  export interface Request {
    admin: {
      id: string;
    };

    func: {
      id: string;
    };

    realizaExame: {
      vencimento: Date;
    };
  }
}
