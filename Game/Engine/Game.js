import { Player } from '../player/player.js';
import { World } from '../world/world.js';
import { UI } from '../ui/ui.js';

export class Game {
  constructor(canvas){
    this.canvas = canvas;
    this.ctx = canvas.getContext('2d');
    this.player = new Player();
    this.world = new World();
    this.ui = new UI(this);
  }

  start(){
    this.lastTime = performance.now();
    requestAnimationFrame(this.loop.bind(this));
  }

  loop(now){
    const dt = (now - this.lastTime)/1000;
    this.update(dt);
    this.render();
    this.lastTime = now;
    requestAnimationFrame(this.loop.bind(this));
  }

  update(dt){
    this.player.update(dt);
    this.world.update(dt, this.player);
  }

  render(){
    this.ctx.clearRect(0,0,this.canvas.width,this.canvas.height);
    this.world.render(this.ctx);
    this.player.render(this.ctx);
    this.ui.render(this.ctx);
  }
}
