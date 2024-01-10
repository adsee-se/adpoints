export type Question = {
  id?: number;
  user_id?: number;
  title?: string;
  question_text?: string;
  point?: number;
  category?: string;
  status?: number;
  created_at?: Date;
  created_by?: string;
  updated_at?: Date;
  updated_by?: string;
};
