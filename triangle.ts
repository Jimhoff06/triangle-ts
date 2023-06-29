export class Triangle {
  private sortedSides: Array<number>;
  isEquilateral: boolean;
  isIsosceles: boolean;
  isScalene: boolean;
  private testTriangleInequality(): boolean {
    if (this.sortedSides[2] <= 0) {
      return false;
    }
    return this.sortedSides[0] < this.sortedSides[1] + this.sortedSides[2];
  }
  private testIsEquilateral(): boolean {
    return this.testTriangleInequality() && this.duplicateSides().length > 1;
  }
  private testIsIsosceles(): boolean {
    return this.testTriangleInequality() && this.duplicateSides().length >= 1;
  }
  private testIsScalene(): boolean {
    return this.testTriangleInequality() && this.duplicateSides().length === 0;
  }
  private duplicateSides() {
    return this.sortedSides.filter(
      (side, index) => this.sortedSides.indexOf(side) !== index
    );
  }

  constructor(a: number, b: number, c: number) {
    this.sortedSides = [a, b, c].sort((a, b) => {
      return b - a;
    });
    this.isEquilateral = this.testIsEquilateral();
    this.isIsosceles = this.testIsIsosceles();
    this.isScalene = this.testIsScalene();
  }
}
