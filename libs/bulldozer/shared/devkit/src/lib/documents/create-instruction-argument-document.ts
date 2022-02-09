import { AccountInfo } from '@solana/web3.js';
import { bulldozerProgram } from '../programs';
import {
  Document,
  InstructionArgument,
  INSTRUCTION_ARGUMENT_ACCOUNT_NAME,
} from '../utils';
import { decodeAttributeEnum } from './internal';

export const createInstructionArgumentDocument = (
  publicKey: string,
  account: AccountInfo<Buffer>
): Document<InstructionArgument> => {
  const decodedAccount = bulldozerProgram.coder.accounts.decode(
    INSTRUCTION_ARGUMENT_ACCOUNT_NAME,
    account.data
  );
  const decodedKind = decodeAttributeEnum(decodedAccount.kind);
  const decodedModifier =
    decodedAccount.modifer && decodeAttributeEnum(decodedAccount.modifer);

  return {
    id: publicKey,
    metadata: account,
    name: decodedAccount.name,
    data: {
      authority: decodedAccount.authority.toBase58(),
      workspace: decodedAccount.workspace.toBase58(),
      application: decodedAccount.application.toBase58(),
      instruction: decodedAccount.instruction.toBase58(),
      kind: decodedKind,
      modifier: decodedModifier || null,
      max: decodedKind.id === 1 ? decodedKind.size : null,
      maxLength: decodedKind.id === 2 ? decodedKind.size : null,
    },
    createdAt: decodedAccount.createdAt,
    updatedAt: decodedAccount.updatedAt,
  };
};
