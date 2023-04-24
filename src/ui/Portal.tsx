import {FC, isValidElement, PropsWithChildren, useLayoutEffect, useState} from "react";
import {createPortal} from "react-dom";
import { useClickOutside } from "@/ui/utils/use-click-outside";

type PortalProps = {
  wrapperId: string;
  onClickOutside?: any;
};

const createContainerAndAppendToBody = (wrapperId: string) => {
  const container = document.createElement("div");
  container.id = wrapperId;
  document.body.appendChild(container);
  return container;
};

const removeContainerAndDetachFromBody = (wrapperId: string) => {
  const container = document.getElementById(wrapperId);
  container?.parentNode?.removeChild(container);
};
export const Portal: FC<PropsWithChildren<PortalProps>> = (props) => {
  const { children, wrapperId, onClickOutside } = props;
  const [container, setContainer] = useState<any>(null);
  useClickOutside(container, onClickOutside);
  useLayoutEffect(() => {
    let container = document.getElementById(wrapperId);

    if (!container) {
      container = createContainerAndAppendToBody(wrapperId);
    }
    setContainer(container);
    () => removeContainerAndDetachFromBody(wrapperId);
  }, [wrapperId]);

  if (container == null) return <></>;

  return isValidElement(children) ? createPortal(children, container) : <></>;
};