export type Question = {
  id?: number | null;
  userId?: string | null;
  title?: string | null | undefined;
  questionText?: string | null | undefined;
  point?: number | null;
  category?: string | null | undefined;
  status?: number | null;
  answer?: string | null;
  createdAt?: string | null;
  createdBy?: string | null;
  updatedAt?: string | null;
  updatedBy?: string | null;
};
