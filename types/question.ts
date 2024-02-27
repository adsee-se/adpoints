export type Question = {
  id: string;
  userId?: string | null; // TODO userMailかuserIdか確認
  title?: string;
  questionText: string | null | undefined;
  point?: number | null;
  category: string | null | undefined;
  status?: number | null;
  answer?: string | null;
  createdAt?: string | null;
  createdBy?: string | null;
  updatedAt?: string | null;
  updatedBy?: string | null;
};
