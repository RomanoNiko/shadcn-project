<template>
    <Card>
        <CardHeader>
            <CardTitle>
                <slot name="title"></slot>
            </CardTitle>
            <CardDescription>
                <slot name="description_title"></slot>
            </CardDescription>
        </CardHeader>
        <CardContent>
            <CardDescription>
                <slot name="description"></slot>
            </CardDescription>
        </CardContent>
    </Card>
</template>
