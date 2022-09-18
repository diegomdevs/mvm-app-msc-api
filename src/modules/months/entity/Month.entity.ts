import { Prop, Schema } from '@nestjs/mongoose';
import { Types } from 'mongoose';
import Bill from '../../bills/entity/Bill.entity';

@Schema()
export default class Month {
  @Prop({ type: String })
  name: string;
  @Prop({ type: [{ type: Types.ObjectId, ref: Bill.name }] })
  bills: Types.Array<Bill>;
  @Prop({ type: Boolean, required: true })
  solvent: boolean;
  @Prop({ type: Number, required: true })
  missing: number;
}