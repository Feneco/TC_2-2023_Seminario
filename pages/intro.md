---
layout: two-cols
---

## Problema do caminho Hamiltoniano

Saber se tem um CAMINHO que passa por todos os vértices de um grafo

<v-click>

## Problema do ciclo Hamiltoniano

Saber se tem um caminho que passa por todos os vértices de um grafo *e*
inicia e termina no mesmo vértice.

</v-click>

<v-click>

<Attention>
  Não é necessário passar por todas as arestas
</Attention>

</v-click>

::right::

<v-click>

## Convenções de grafos usadas

- Nós são chamados de vértices
- As ligações são chamadas de arestas

</v-click>

<v-click>

<span class="opacity-30"> (Não confundir com caminho Euleriano) </span>

<span class="opacity-30"> (Também existe o problema de caminho Hamiltoniano entre 2 pontos) </span>

</v-click>

---
layout: two-cols
---

## Caminho

![](/graph1.jpg)

::right::

## Ciclo

![](/cycle1.png)

Janusz.c, CC BY-SA 3.0 <https://creativecommons.org/licenses/by-sa/3.0>, via Wikimedia Commons

---

## Aplicações de Ciclo/Caminho Hamiltoniano

### Computação gráfica

<Center>
  <img src="/car1.png" class="h-90">
</Center>

  modelo por Ivan Norman

--- 

## Aplicações de Ciclo/Caminho Hamiltoniano

### Computação gráfica

<Center>
  <img src="/car2.png" class="h-90">
</Center>

modelo por Ivan Norman

--- 

## Aplicações de Ciclo/Caminho Hamiltoniano

### Computação gráfica

<Center>
  <img src="/car3.png" class="h-90">
</Center>

modelo por Ivan Norman


--- 

## Aplicações de Ciclo/Caminho Hamiltoniano

### Problema do caixeiro viajante

Encontrar todos os Ciclos Hamiltonianos e dar uma nota a cada um

### Diversos tipos de grafos tem ciclos ou caminhos

<Center>
  <img src="/platonic_graphs.png" class="h-60">
</Center>

By Cmglee - Own work, CC BY-SA 4.0, <br> https://commons.wikimedia.org/w/index.php?curid=104005231

---
layout: fact
---

## Teorema de Ore

"Para todos os pares de vértices não adjacentes $\left\{u, v\right\}$, se o grau de $u$ mais o grau de $v$ for maior que a quantidade de vértices do grafo, então existe um ciclo Hamiltoniano"

---

## Teorema de Ore

"Para todos os pares de vértices não adjacentes $\left\{u, v\right\}$, se o grau de $u$ mais o grau de $v$ for maior que a quantidade de vértices do grafo, então existe um ciclo Hamiltoniano"

<Center>
  <img src="/ore1.png" class="h-80">
</Center>

---

## Teorema de Ore

"Para todos os pares de vértices não adjacentes $\left\{u, v\right\}$, se o grau de $u$ mais o grau de $v$ for maior que a quantidade de vértices do grafo, então existe um ciclo Hamiltoniano"

<Center>
  <img src="/ore2.png" class="h-80">
</Center>

---
layout: fact
---

### Nota: O teorema só funciona em uma "direção"!

<Center>
  <img src="/ore3.png" class="h-100">
</Center>

---
layout: fact
---

### Nota: O teorema só funciona em uma "direção"!

<Center>
  <img src="/ore4.png" class="h-100">
</Center>

---
layout: fact
---

## Teorema de Dirac

Em um grafo com $n$ vértices e $n\ge3$, se todo vértice tem grau maior ou igual a $\frac{n}{2}$ o grafo é Hamiltoniano.

<span class="opacity-30"> (Como no teorema de Ore, também só funciona em uma direção) </span>