"use client";

import { useState } from "react";

type VipTier = {
  amount: string;
  value: string;
  bonus: string;
};

export function VipTierSelector({
  tiers,
  phoneDisplay,
  phoneUrl,
}: {
  tiers: VipTier[];
  phoneDisplay: string;
  phoneUrl: string;
}) {
  const [selectedAmount, setSelectedAmount] = useState(tiers[0]?.amount ?? "");
  const selectedTier =
    tiers.find((tier) => tier.amount === selectedAmount) ?? tiers[0];

  if (!selectedTier) {
    return null;
  }

  return (
    <div className="vip-selector">
      <div className="vip-tiers" role="listbox" aria-label="Choose a VIP value tier">
        {tiers.map((tier) => {
          const selected = tier.amount === selectedTier.amount;

          return (
            <button
              aria-selected={selected}
              className="vip-tier"
              key={tier.amount}
              onClick={() => setSelectedAmount(tier.amount)}
              role="option"
              type="button"
            >
              <span>Charge</span>
              <strong>{tier.amount}</strong>
              <div className="vip-tier-receive">
                <small>Receive</small>
                <b>{tier.value}</b>
                <em>{tier.bonus}</em>
              </div>
            </button>
          );
        })}
      </div>

      <section className="vip-purchase" id="vip-purchase" aria-live="polite">
        <div className="vip-purchase-summary">
          <p className="eyebrow">Selected VIP card</p>
          <h3>{selectedTier.amount} load</h3>
          <strong>Receive {selectedTier.value}</strong>
          <span>{selectedTier.bonus}</span>
        </div>
        <div className="vip-purchase-actions">
          <p className="eyebrow">Payment options</p>
          <div className="payment-methods">
            <span>At the restaurant</span>
            <span>Call ahead</span>
            <span>Online link coming soon</span>
          </div>
          <a className="button primary" href={phoneUrl}>
            Call {phoneDisplay} to purchase
          </a>
          <p className="payment-note">
            The official online purchase link can be connected here when the
            payment system is ready.
          </p>
        </div>
      </section>
    </div>
  );
}
