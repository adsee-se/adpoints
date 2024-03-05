export type Question = {
  id?: string;
  userId?: string | null;
  title?: string;
  questionText?: string | null;
  point?: number | null;
  category?: string | null;
  status?: number | null;
  answer?: string | null;
  createdAt?: Date | string | null;
  createdBy?: Date | string | null;
  updatedAt?: Date | string | null;
  updatedBy?: Date | string | null;
};
