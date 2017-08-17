一种多行文本文末省略号的JS解决方案
字符串视觉感官上的长度计算方案

核心思想：
1. 将单个数字、字幕、符号算作一个长度
2. 将中文、表情符等算作两个长度
3. 将emoji表情符算作两个长度

使用
```
npm install vision-string
```

测试
```
npm t
```


```
test(t => {
    let { length, getLength, isDouble} = b;

    t.is(getLength('asdfghjkl'), 9);
    t.is(getLength('@#$%^&*()'), 9);
    t.is(getLength('123456789'), 9);
    t.is(getLength('.........'), 9);
    t.is(getLength('中中中中中'), 10);
    t.is(getLength('😄😄😄😄😄'), 10);

    t.is(isDouble('中'), true);
    t.is(isDouble('😄'), true);
    t.is(isDouble('1'), false);
    t.is(isDouble('a'), false);
    t.is(isDouble('@'), false);

    t.is(length('1a中', 1), '1');
    t.is(length('1a中', 2), '1a');
    t.is(length('1a中', 3), '1a');
    t.is(length('1a中', 4), '1a中');
    t.is(length('1a中😄', 6), '1a中😄');
    t.is(length('1a中😄😄', 8), '1a中😄😄');
    t.is(length('😄😄😄😄😄😄😄😄😄😄😄😄😄😄', 4), '😄😄');
});
```