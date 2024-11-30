import bcrypt from 'bcrypt'

export const encrypt = async (text: string): Promise<string | Error> => {
  const salt_rounds = Math.round(Math.random() * 100)
  const salt = await bcrypt.genSalt(salt_rounds)
  const hash = await bcrypt.hash(text, salt)

  if (hash) {
    return hash
  } else {
    throw Error('error hashing')
  }
}