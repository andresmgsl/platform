import { Injectable } from '@angular/core';
import {
  BULLDOZER_PROGRAM_ID,
  createInstructionAccountDocument,
  Document,
  InstructionAccount,
  InstructionAccountFilters,
  instructionAccountQueryBuilder,
} from '@heavy-duty/bulldozer-devkit';
import { NgxSolanaSocketService } from '@heavy-duty/ngx-solana';
import { concatMap, EMPTY, map, Observable, of } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class InstructionAccountSocketService {
  constructor(
    private readonly _ngxSolanaSocketService: NgxSolanaSocketService
  ) {}

  instructionAccountChanges(
    instructionAccountId: string
  ): Observable<Document<InstructionAccount> | null> {
    return this._ngxSolanaSocketService
      .onAccountChange(instructionAccountId)
      .pipe(
        map((accountInfo) =>
          accountInfo.lamports > 0
            ? createInstructionAccountDocument(
                instructionAccountId,
                accountInfo
              )
            : null
        )
      );
  }

  instructionAccountCreated(
    filters: InstructionAccountFilters
  ): Observable<Document<InstructionAccount>> {
    const query = instructionAccountQueryBuilder()
      .where(filters)
      .setCommitment('finalized')
      .build();

    return this._ngxSolanaSocketService
      .onProgramAccountChange(BULLDOZER_PROGRAM_ID.toBase58(), query)
      .pipe(
        concatMap(({ account, pubkey }) => {
          if (account.lamports === 0) {
            return EMPTY;
          } else {
            const document = createInstructionAccountDocument(pubkey, account);

            if (document.createdAt.eq(document.updatedAt)) {
              return of(document);
            } else {
              return EMPTY;
            }
          }
        })
      );
  }
}