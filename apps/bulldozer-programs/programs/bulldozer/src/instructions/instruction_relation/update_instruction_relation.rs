use crate::collections::{InstructionAccount, InstructionRelation};
use anchor_lang::prelude::*;

#[derive(Accounts)]
pub struct UpdateInstructionRelation<'info> {
  #[account(mut, has_one = authority)]
  pub relation: Box<Account<'info, InstructionRelation>>,
  pub from: Box<Account<'info, InstructionAccount>>,
  pub to: Box<Account<'info, InstructionAccount>>,
  pub authority: Signer<'info>,
  pub clock: Sysvar<'info, Clock>,
}

pub fn handle(ctx: Context<UpdateInstructionRelation>) -> ProgramResult {
  msg!("Update instruction relation");
  ctx.accounts.relation.from = ctx.accounts.from.key();
  ctx.accounts.relation.to = ctx.accounts.to.key();
  ctx.accounts.relation.updated_at = ctx.accounts.clock.unix_timestamp;
  Ok(())
}