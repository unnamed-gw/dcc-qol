/* global game */
export const registerSystemSettings = async function () {
  /**
   * Automate Deed Die Roll for warrior/dwarf attacks
   */
  game.settings.register('dcc-qol', 'automateDeedDieRoll', {
    name: 'DCC-QOL.SettingAutomateDeedDieRoll',
    hint: 'DCC-QOL.SettingAutomateDeedDieRollHint',
    scope: 'world',
    type: Boolean,
    default: false,
    config: true
  })

  /**
   * Automatically check Friendly Fire
   * Firing a missile weapon into melee 50% chance of “friendly fire” if attack misses; see page 96.
   */
  game.settings.register('dcc-qol', 'automateFriendlyFire', {
    name: 'DCC-QOL.SettingAutomateFriendlyFire',
    hint: 'DCC-QOL.SettingAutomateFriendlyFireHint',
    scope: 'world',
    type: Boolean,
    default: false,
    config: true
  })

  /**
   * Automatically adjust monster's critical hit.
   * A positive Luck modifier reduces the monster’s roll, whereas a negative modifier grants a bonus to the monster’s critical hit roll.
   */
  game.settings.register('dcc-qol', 'automateMonsterCritLuck', {
    name: 'DCC-QOL.SettingAutomateMonsterCritLuck',
    hint: 'DCC-QOL.SettingAutomateMonsterCritLuckHint',
    scope: 'world',
    type: Boolean,
    default: false,
    config: true
  })

  /**
   * Check weapon's range and if target is beyond UI warning diplay appears and prevent rolls
   * Applies penalty for ranged weapons based on range
   */
  game.settings.register('dcc-qol', 'checkWeaponRange', {
    name: 'DCC-QOL.SettingWeaponRangeCheck',
    hint: 'DCC-QOL.SettingWeaponRangeCheckHint',
    scope: 'world',
    type: Boolean,
    default: false,
    config: true
  })

  /**
   * Check weapon can be used for backstab if not UI warning diplay appears and prevent rolls
   */
  game.settings.register('dcc-qol', 'checkWeaponBackstab', {
    name: 'DCC-QOL.SettingWeaponBackstab',
    hint: 'DCC-QOL.SettingWeaponBackstabHint',
    scope: 'world',
    type: Boolean,
    default: false,
    config: true
  })
}
