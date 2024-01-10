import NextAuth from 'next-auth';
import Providers from 'next-auth/providers';
import { NextApiRequest, NextApiResponse } from 'next';

interface User {
  id: number;
  name: string;
  email: string;
}

export default NextAuth({
  providers: [
    Providers.Credentials({
      async authorize(credentials: { username: string; password: string }, req: NextApiRequest, res: NextApiResponse) {
        // ここでは仮のユーザー情報を使用
        const user: User | null = { id: 1, name: 'exampleuser', email: 'user@example.com' };

        if (user) {
          return Promise.resolve(user);
        } else {
          return Promise.resolve(null);
        }
      },
    }),
  ],
  // 他の設定を追加できる
});
