export type Gender = 'male' | 'female';
export type Branch = 'paternal' | 'maternal' | 'parents' | 'children';
export type AvatarType = 
  | 'grandfather_paternal' 
  | 'grandmother_paternal' 
  | 'grandfather_maternal' 
  | 'grandmother_maternal' 
  | 'father' 
  | 'mother' 
  | 'son_older' 
  | 'daughter' 
  | 'son_middle' 
  | 'son_younger';

export interface Person {
  id: string;
  name: string;
  role: string;
  shortRole: string;
  branch: Branch;
  gender: Gender;
  birthDate?: string;
  bio?: string;
  generation: 1 | 2 | 3;
  isMe?: boolean;
  avatarType: AvatarType;
  childNumber?: number;
  parents?: string[];
  partnerId?: string;
}
