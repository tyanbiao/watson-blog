---
title: '为什么 Tailwind 和我八字不合'
description: '丑陋的 HTML，不合标准的 @apply，可以用 CSS 变量代替，对 web 组件不友好，我就是不喜欢 Tailwind'
cover: 'https://nextfe.com/static/c2b50607a8ccad62506b78708a87efb5/2c512/5Gjro2OZN1A.jpg'
date: '2021-01-21'
---

[Jared White](https://dev.to/jaredcwhite/why-tailwind-isn-t-for-me-5c90) 原作，授权 [New Frontend](https://nextfe.com/) 翻译。

最近我好几次在网上因为 [Tailwind CSS](https://tailwindcss.com/) 陷入激烈争论。我并不引以为傲，也不喜欢和任何人起冲突。我认为做出 Tailwind 的人是很友好、很有天赋的人。但从纯技术层面来说，我就是不喜欢 Tailwind。不管它是谁的菜，**它不是我的菜**。

从某种角度上来说，这没什么不好。世上有**一大堆**我从来不用的 web 技术。这并不意味着这些技术不好。可供选择的时髦技术栈太多了。

问题在于「Tailwind **是未来**，**是皇皇正道**」变成越来越流行的情怀。原本只是一家之见，却激起了太多布道者的热情。从某一层面上说，这也没什么不好。比如 Rails 也是很有主张的框架，我很喜欢 Rails。

但 Tailwind 先下了战书，Tailwind 的作者 Adam Wathan 在 Tailwind 的网站上明晃晃地写着：

> 「最佳实践」不切实际。
> 
> 我曾洋洋洒洒写了几千字说明为什么「语义化的类名」才是 CSS 难以维护的罪魁祸首，但真相是直到你亲身体验之前，你都不会相信我的话。我真心相信，如果你能捏着鼻子试用一下 Tailwind 的话，你会想，为什么以前居然会用其他方式处理 CSS。

我接受了这一挑战。

我试过 Tailwind，我用过 Tailwind，也绝非浅尝辄止。我曾为一个大客户做过项目，用的就是 React 和 Tailwind。所以不管你打算用什么来攻击我，也不能攻击我不曾全心全意地使用过 Tailwind。

这绝对不是我的问题。事实上我发现 Tailwind 确实存在一些问题，但每次我指出这些问题的时候，立刻就会遭到 Tailwind 死忠的反击，以各种各样的方式攻击我是脑残。这让我极度沮丧。作为一个从上世纪 90 年代后期开始全职从事 web 开发的程序员，我不接受这样的攻击。

鉴于啁啾会馆（Twitter）和骇客杂报（Hacker News）显然不是这类技术讨论的好媒介，我写了这篇文章，列举 Tailwind 和我八字不合的主要原因。

问题一：Tailwind 的 HTML 丑出翔
-----------------------

第一个问题看上去仅仅是美学上的考虑，但我后面会指出这个问题实际上和一些技术上的挑战密切相关。不过，最起码我**讨厌**那些仅为工具 CSS 而写的 HTML。讨厌，真讨厌，太讨厌。甚至 Adam 已经意识到了这一点，毕竟他请我们「捏着鼻子试用一下」。这其实默默承认了用这种方式写标记就是既丑陋又诡异，只是因为收益巨大，我们可以渐渐「克服」这一点。

可是，写了一年 Tailwind 后，我还是克服不了。对不起大家了！你们**永远**没法让我欣赏这样的代码：

```html
<div class="min-w-0 flex-auto space-y-0.5">
  <p class="text-lime-600 dark:text-lime-400 text-sm sm:text-base lg:text-sm xl:text-base font-semibold uppercase">
    <abbr title="Episode">Ep.</abbr> 128
  </p>
  <h2 class="text-black dark:text-white text-base sm:text-xl lg:text-base xl:text-xl font-semibold truncate">
    Scaling CSS at Heroku with Utility Classes
  </h2>
  <p class="text-gray-500 dark:text-gray-400 text-base sm:text-lg lg:text-base xl:text-lg font-medium">
    Full Stack Radio
  </p>
</div>
```

我现在已经听到许多人在电脑屏幕前大吼大叫：「伙计，你想保持 HTML 整洁，用 `@apply` 就行了！问题解决了！」好吧，这确实是一个潜在的解决方案，事实上我们在前面提到的项目中就是这么做的。在我们的项目中，大量 HTML 涉及面向组件层面的类名（概念上相当接近 BEM），所以我们是 `@apply` 的重度使用者。但这就引出第二个问题了。

问题二：`@apply` 根本不兼容标准，而且总的来说并无必要
-------------------------------

这个问题踩到了许多 Tailwind 粉的尾巴，引得他们反反复复和我争辩，所以我这里尽量解释清楚。

1.  CSS 文件中的 `@apply mt-3` **仅**当使用 Tailwind 时有效。Tailwind 必须参与构建。如果从构建过程中去掉 Tailwind，这样的语句无法工作，CSS 文件不可用。
2.  尽管生成的 CSS 可以脱离 Tailwind 使用，但如果你像我们一样，为每个组件编写的 CSS 都放在单独的文件中，那么生成的 CSS 文件通常打包了分布在代码仓库各处的数以百计的 CSS 文件，实在不适合作为源码。
3.  因此，为 Tailwind 写的 CSS 文件并不符合标准，**从根本上不兼容**其他 CSS 框架和工具。一旦选择了 Tailwind，**你就踏上了一条不归路。** （登登登 😱）
4.  罪加一等的是，在 CSS 文件里到处写 `@apply` 基本上意味着你学习和编写的不是 CSS。你写的是 Tailwind。`@apply flex` 写得再多也**不等于** `display: flex`。

我知道我们大多数人都没有频繁更换 CSS 框架的习惯。但是相信我，我这么干过！我为客户做的一个项目从 Foundation 迁到了 Bulma。确实需要更新不少 HTML 和 样式，但完全不用担心我们之前写的定制样式迁移不过来，因为我们写的是标准的 CSS（或者 Sass），不管用什么框架，都能工作。

尽管 `@apply` 表面上很酷，但它最终变成了一根大拐杖。例如，Tailwind 的书写风格让 CSS 网格布局变得相当直截了当，我很喜欢这点。不幸的是，掌握 Tailwind 的写法后，我自己仍未真正理解 CSS 网格的语法。我仍然不了解开放的 CSS 标准。

至于为何 `@apply` 总的来说是不必要的，我会在下一个问题中说明。

问题三：Tailwind 提供的设计体系基本上可以用标准的 CSS 变量代替
--------------------------------------

人们最初喜欢 Tailwind 的原因是它带来了开箱即用的良好设计体系，以及大量可供调整的原语（token），比如色彩、字体大小、间距，可以很方便地快速获得精美的视觉呈现。

问题在于这些原语都是通过 JavaScript 定义的。都 2021 年了，一个 CSS 框架还基于 JavaScript 定义原语。

我不喜欢给人科普，但所有现代的浏览器都支持 CSS 自定义属性。只需在 `:root` 层面将设计原语定义为变量，就**处处**可用。你甚至可以在站点加载后实时修改定义，或者在 DOM 树的具体部分重载。CSS 变量配合 web 组件使用的效果十分**出色**。稍后我再谈这一点。

例如，在 Tailwind 下可以写 `class="mb-8"`，最后应用的样式会是 `margin-bottom: 2rem`。不过猜猜用 CSS 变量怎么写？在样式表中定义 `:root { --spacing-8: 2rem }` 后，就可以在需要的地方直接写 `margin-bottom: var(--spacing-8)`。真的是处处可写：样式表，JS 组件，**甚至包括在 HTML 中直接写 `style=` 属性！**

是的，当你开始考虑诸如如何适应响应式断点之类的事情的时候，就不再那么美好了，但不管怎么说，总体上说，Tailwind 的设计体系使用了非标准的基于 JavaScript 的构建过程，而你完全可以使用所有现代浏览器都支持的**原生**语法构建设计体系。

说到现代浏览器**原生**支持……

问题四：Tailwind 对 web 组件不管不顾
-------------------------

这也许是对 Tailwind 最严重的批评。看起来设计和推广 Tailwind 的人生活在一个不存在 web 组件的世界里。影子 DOM 下 Tailwind CSS 完全不可用。一些企业级开发者提供了一些解决方案，在构建过程中把 Tailwind 的样式有选择地注入组件，但这明显是奇技淫巧。

与此同时，今时今日有很多方式可以构建基于 web 组件的设计体系，在影子 DOM 下全局主题、组件样式都能很好地工作。同样，这些都可以基于内建于现代浏览器的原生技术。在你耸耸肩回去用 React 和 Vue 前，记得 web 组件不仅是现在的 HTML/CSS/JS 规范的内在成分，也日益成为浏览器技术未来发展的核心（例如，未来表单控件的高级定制也许会基于 web 组件）。

在这方面，Tailwind 和 BootStrap、Foundation 等几年前、十几年前写的 CSS 框架一样无用。（甚至我钟爱的 Bulma 也一样！😢）

问题五：最后，Tailwind 鼓励写出一坨坨 div/span 代码
-----------------------------------

我之前基本上已经谈到了这点，但它值得单列一节。我现在相信在标记语言里到处写 `<div>` 和 `<span>` 是一种反模式。我们生活在现代浏览器对各种专门元素（`<whatever-you-can-dream-of>`）支持完善的世界里。在可以写 `<ui-card></ui-card>` 的时候，几乎没有什么必须写 `<div class="card"></div>` 的理由。事实上，使用自定义的元素和属性完全可以写出**极富表达力的标记**，和那些经典古旧的标记语言相比，看起来非常新潮！

以 [Shoelace](https://shoelace.style/) web 组件库为例。下面是一个按钮：

```
<sl-button type="default" size="small">
  <sl-icon slot="prefix" name="gear"></sl-icon>
  Settings
</sl-button>
```

下面是模态对话框：

```
<sl-dialog label="Dialog" style="--width: 50vw;">
  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
  <sl-button slot="footer" type="primary">Close</sl-button>
</sl-dialog>
```

注意，这不是 JSX，也不是 XML，也不是啥需要转换为普通 HTML 的酷炫模版语言。

**这就是 HTML。** 现代标记语言长这样。

和 Tailwind 主页上的例子对比下：

```
<button class="hover:bg-light-blue-200 hover:text-light-blue-800 group flex items-center rounded-md bg-light-blue-100 text-light-blue-600 text-sm font-medium px-4 py-2">
  New
</button>
```

呕呕呕。🤢

这是 HTML/CSS/JS 的未来（很大程度上已经是现实了），可以使用原生 CSS 便捷地编写所谓的网格/弹性盒子布局，使用 CSS 变量定义设计原语，使用 Shoelace 这样架构良好的 web 组件库（甚至同时使用多个组件库），最终得到**精美**易用的站点/应用——这些都不需要**任何**体积庞大的 Tailwind 工具类，自然你也就不需要设法移除多余的 Tailwind 工具类来改善性能。

换句话说，除了可以基于工具类快速创建原型外，Tailwind 的主要卖点是引人注目的设计体系，然后它实现设计体系的方式实在太糟糕了！（默认不兼容 web 组件，极少使用 CSS 变量，不鼓励使用限制作用域的自定义元素/属性……

这就带来一个问题：Tailwind 到底是怎么做到让我们「创建现代站点」的？从纯技术层面，老实说，我看不到它相比 Bootstrap 有多少进步。Bootstrap 至少免费提供一个开源组件库。Tailwind [却让你为此付费](https://tailwindui.com/)。

结论：喜欢 Tailwind 就用！以后别来劝我用！
--------------------------

听好了，我们可以就任何技术的相对优势或劣势反复拉锯。选择 Tailwind 肯定有一些好处，最显著的一项是，从一个空白页面开始，直接把一些基于工具类的 div 标签凑一凑，就能快速得到酷炫的设计。

但在使用 Tailwind 一年后，对比其他处理 HTML、样式的方式，对比其他那些基于 web 组件进行 web 开发的方式，权衡利弊，我完全确信 Tailwind 不能代表我所希望的 web 的整体发展方向。抱歉了，Tailwind 粉丝，你们没有足够有力的论据说服我。

这就是为什么 Tailwind 和我八字不合。你的情况可能不同。🙃

题图 [Gabriele Diwald](https://unsplash.com/photos/5Gjro2OZN1A)