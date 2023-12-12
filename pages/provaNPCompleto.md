---
layout: image-right
image: https://source.unsplash.com/collection/94734566/1920x1080
---

# Problema do Caminho Hamiltoniano é NP completo


Temos que provar 4 coisas:

<v-clicks>

1. É um problema de decisão;
1. Tem um certificado de solução Polinomial;
1. Tem um verificador do certificado Polinomial;
1. Tem que ter um problema em NP redutível para Caminho Hamiltoniano.

</v-clicks>

---

### 1. É um problema de decisão

**É / Não É** um caminho hamiltoniano

<v-click>

### 2. Tem Certificado P

Lista em ordem de vértices visitados

```js {all}
const certificado_caminho = ["A", "B", "C", "D"]
```

</v-click>

<v-click>

<Attention>
polinomial
</Attention>

</v-click>

<v-click>

### 3. Tem Verificador P

Visitar cada vértice do certificado e verificar se tem como chegar no próximo da lista. Verifica também se não há repetições de vértices.  No final verifica se todos os vértices foram visitados.

</v-click>

<v-click>

<Attention>
Também polinomial
</Attention>

</v-click>

---

### 4. É reduzível a um problema que ja está em NP

Podemos fazer a redução de 3-Satisfabilidade para o caminho Hamiltoninao

$$
    3SAT \le_p CaminhoHamiltoniano
$$

<v-click>

#### Explicação de 3-SAT

3-SAT é um caso especial de SAT que deve obedecer a forma abaixo.


$$ {all|1|2|3|all}
    \begin {array}{c}
              & \overbrace{\left( x_1 \lor x_2 \lor x_3 \right)}^{C_1} \\
        \land & \overbrace{\left( \overline{x_1} \lor x_2 \lor \overline{x_4} \right)}^{C_2} \\
        \land & \overbrace{\left( \overline{x_2} \lor \overline{x_3} \lor x_4 \right)}^{C_3}
    \end {array}
$$

Podem existir N cláusulas e M variáveis. Toda cláusula é composta 3 variáveis.

</v-click>

---
layout: two-cols
---

### Construção 

#### Buginganga

Para uma variável:

<Center>
    <img src="/gadget1.png" class="h-70">
</Center>

O caminho hamiltoniano acima só existe se passar pelos nós do "meio".

::right::

Conectando uma buginganga na outra

<Center>
    <img src="/gadget2.png" class="h-110">
</Center>

---
layout: two-cols
---

Adiciona-se as cláusulas

<Center>
    <img src="/gadget3.png" class="h-100">
</Center>

::right::

Conectando as cláusulas à buginganga

$$ {1-2}
    \begin {array}{c}
              & \underset{C_1}{\left( \textcolor{#288c6b}{x_1} \lor x_2 \lor x_3 \right)} \\
        \land & \underset{C_2}{\left( \textcolor{#e50cc1}{\overline{x_1}} \lor x_2 \lor \overline{x_4} \right)} \\
        \land & \underset{C_3}{\left( \overline{x_2} \lor \overline{x_3} \lor x_4 \right)}
    \end {array}
$$



<Center>
    <img src="/gadget4.png" class="h-60">
</Center>

<v-click>

<Arrow x1="10" y1="450" x2="150" y2="350" />

Observe a direção das conexões

</v-click>

---
layout: two-cols
---

<div>
    <img src="/gadget5.png" class="h-110">
</div>

::right::

### Solução completa

Tente algumas combinações de variáveis!

<span class="opacity-30"> (O Ciclo Hamiltoniano também está em NP) </span>
