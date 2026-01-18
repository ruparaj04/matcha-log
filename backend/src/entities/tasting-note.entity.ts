import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, JoinColumn } from 'typeorm';
import { Matcha } from './matcha.entity';

@Entity('tasting_notes')
export class TastingNote {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  matchaId: number;

  @Column('int')
  flavorRating: number;

  @Column('int')
  aromaRating: number;

  @Column('int')
  textureRating: number;

  @Column('int')
  overallRating: number;

  @Column('text', { nullable: true })
  notes: string;

  @Column('date')
  tastingDate: Date;

  @Column('int', { nullable: true })
  brewingTemperature: number;

  @Column({ nullable: true })
  brewingMethod: string;

  @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
  createdAt: Date;

  @ManyToOne(() => Matcha, matcha => matcha.tastingNotes, { onDelete: 'CASCADE' })
  @JoinColumn({ name: 'matchaId' })
  matcha: Matcha;
}
