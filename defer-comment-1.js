    <b:if cond='data:post.numComments != 0'>
    var Items = <data:post.commentJso/>;
    var Msgs = <data:post.commentMsgs/>;
    var Config = <data:post.commentConfig/>;
    
    <b:else/>
    var Items = {};
    var Msgs = {};
    var Config = {&#39;maxThreadDepth&#39;:&#39;0&#39;};
    </b:if>
