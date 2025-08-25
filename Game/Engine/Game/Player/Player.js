export class Player {
  constructor(){
    this.x = 100;
    this.y = 100;
    this.health = 100;
    this.mana = 100;
    this.inventory = [];
    this.classType = 'Bloodmage';
  }

  update(dt){
    // handle touch/mobile controls & movement
  }

  render(ctx){
    ctx.fillStyle = 'red';
    ctx.fillRect(this.x, this.y, 32, 32);
  }
}
