import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm';
import { TastingNote } from './tasting-note.entity';

@Entity('matcha')
export class Matcha {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  brand: string;

  @Column()
  origin: string;

  @Column()
  grade: string;

  @Column('text', { nullable: true })
  description: string;

  @Column('decimal', { precision: 5, scale: 2, nullable: true })
  price: number;

  @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
  createdAt: Date;

  @OneToMany(() => TastingNote, tastingNote => tastingNote.matcha)
  tastingNotes: TastingNote[];
}
