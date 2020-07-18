let p;
particles=[];
function setup()
{
    createCanvas(window.innerWidth, window.innerHeight);
    const particlesLength = Math.floor(window.innerWidth/10);
    for(let i=0;i<particlesLength;i++)
    {
        particles.push(new Particle());
    }
}

function draw()
{
    background(255,255,255);
    particles.forEach((p,index) => {
        p.update();
        p.draw();
        p.checkParticles(particles.slice(index));
    });
}

class Particle 
{
    constructor()
    {
        this.pos = createVector(random(width),random(height));
        this.size = 13;
        this.vel = createVector(random(-3,3),random(-3,3));
    }
    update()
    {
        this.pos.add(this.vel);
        this.edges();
    }
    draw()
    {
        noStroke();
        fill('rgba(0,0,0,0.5)');
        circle(this.pos.x,this.pos.y,this.size);
    }
    edges()
    {
        if(this.pos.x < 0 || this.pos.x > width)
        {
            this.vel.x *= -1;
        }
        if(this.pos.y < 0 || this.pos.y > height)
        {
            this.vel.y *= -1;
        }
    }
    checkParticles()
    {
        particles.forEach(particle => {
            const d = dist(this.pos.x, this.pos.y, particle.pos.x, particle.pos.y);
            if(d<120)
            {
                stroke('rgba(0,0,0,0.1)');
                line(this.pos.x, this.pos.y, particle.pos.x, particle.pos.y);
            }
        });
    }
}