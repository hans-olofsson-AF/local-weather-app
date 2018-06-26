export class ArbetsplatsMini {
  private _kundnr: number;
  private _namn;
  string;

  /**
   * Getter kundnr
   * @return {number}
   */
  public get kundnr(): number {
    return this._kundnr;
  }

  /**
   * Setter kundnr
   * @param {number} value
   */
  public set kundnr(value: number) {
    this._kundnr = value;
  }
}
