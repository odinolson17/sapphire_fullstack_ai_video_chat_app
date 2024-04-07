import * as bcrypt from 'bcrypt';
export async function hashPassword (password: string) {
  const salt = await bcrypt.genSalt(12);
  const hash = await bcrypt.hash(password, salt);
  return hash;
};

export function checkHashedPassword (hashedPassword: string, password: string) {
  return bcrypt.compareSync(password, hashedPassword);
};
