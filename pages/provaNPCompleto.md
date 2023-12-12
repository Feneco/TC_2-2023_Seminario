# Prova que é NP completo

<v-click>

## 1. É um problema de decisão

` [ É | Não é ] ` um caminho hamiltoniano

</v-click>

<v-click>

## 2. Tem Certificado P

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

## 3. Tem Verificador P

Visitar cada vértice do certificado e verificar se tem como chegar no próximo da lista. Verifica também se não há repetições de vértices.  No final verifica se todos os vértices foram visitados.

</v-click>

<v-click>

<Attention>
Também polinomial
</Attention>

</v-click>

---

## 4. É reduzível a um problema que ja está em NP

$$
    3SAT \le_p HamiltonianPath
$$

<v-click>

### 3-SAT

$$ {all|1|2|3|all}
    \begin {array}{c}
              & \underset{C_1}{\left( x_1 \lor x_2 \lor x_3 \right)} \\
        \land & \underset{C_2}{\left( \overline{x_1} \lor x_2 \lor \overline{x_4} \right)} \\
        \land & \underset{C_3}{\left( \overline{x_2} \lor \overline{x_3} \lor x_4 \right)}
    \end {array}
$$

3-SAT é um caso especial de SAT que deve obedecer a forma acima

</v-click>

---
layout: two-cols
---

### Construção 

#### Buginganga

Para uma variável:

<div>
    <img src="/gadget1.png" class="h-80">
</div>

::right::

Em sequência:

<div>
    <img src="/gadget2.png" class="h-110">
</div>

---
layout: two-cols
---

Adiciona-se as cláusulas

<div>
    <img src="/gadget3.png" class="h-100">
</div>

::right::

Conectando as cláusulas à buginganga

$$ {1-2}
    \begin {array}{c}
              & \underset{C_1}{\left( \textcolor{#288c6b}{x_1} \lor x_2 \lor x_3 \right)} \\
        \land & \underset{C_2}{\left( \textcolor{#e50cc1}{\overline{x_1}} \lor x_2 \lor \overline{x_4} \right)} \\
        \land & \underset{C_3}{\left( \overline{x_2} \lor \overline{x_3} \lor x_4 \right)}
    \end {array}
$$

<div>
    <img src="/gadget4.png" class="h-70">
</div>

---
layout: two-cols
---

Solução completa

<div>
    <img src="/gadget5.png" class="h-110">
</div>

::right::

Tente algumas combinações de variáveis!