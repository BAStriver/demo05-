import {_decorator, Component, EPhysics2DDrawFlags, Node, PhysicsSystem2D} from 'cc';

const {ccclass, property} = _decorator;

@ccclass('Setting')
export class Setting extends Component {
    @property
    private isDebug = false;

    start() {
        this.showDebug();

    }

    update(deltaTime: number) {

    }

    showDebug() {
        if (this.isDebug) {
            // 绘制物理调试信息
            PhysicsSystem2D.instance.debugDrawFlags = EPhysics2DDrawFlags.Aabb | EPhysics2DDrawFlags.Pair
                | EPhysics2DDrawFlags.CenterOfMass | EPhysics2DDrawFlags.Joint | EPhysics2DDrawFlags.Shape;
        } else {
            //关闭调试区域
            PhysicsSystem2D.instance.debugDrawFlags = EPhysics2DDrawFlags.None;
        }
    }
}


